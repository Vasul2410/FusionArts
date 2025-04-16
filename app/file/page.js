"use client"

import React, { useState } from 'react';

const CHUNK_SIZE = 4 * 1024 * 1024; // 4MB

const ChunkUploader = () => {
  const [progress, setProgress] = useState(0);

  const formatFileName = (originalName) => { 
    const timestamp = new Date() .toISOString() .replace(/[-T:.Z]/g, '') // Remove unwanted characters .slice(0, 17); // Keep yyyyMMddHHmmssfff

    const ext = originalName.substring(originalName.lastIndexOf('.')); 
    return `K4M2A_${timestamp}${ext}`; 
  };
    
    // Then inside your uploadFile function, it's called like this:
    
  const uploadFile = async (file) => {
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
    const blockIds = [];
    console.log("file",file)
    const formattedName = formatFileName(file.name);


    for (let i = 0; i < totalChunks; i++) {
      const start = i * CHUNK_SIZE;
      const end = Math.min(start + CHUNK_SIZE, file.size);
      const chunk = blob.slice(start, end);
      const blockId = btoa(`block-${i.toString().padStart(6, '0')}`); // Base64 required


      const formData = new FormData();
      formData.append('fileChunk', chunk);

      const url = new URL('https://k4m2a-api.azurewebsites.net/api/ChunkFIleUploading/UploadChunk/upload-chunk');
      url.searchParams.append('fileName', formattedName);
      url.searchParams.append('blockId', blockId);
      url.searchParams.append('chunkSize', chunk.size);

      await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(response => {
        if (!response.ok) {
          throw new Error(`Chunk upload failed: ${response.statusText}`);
        }
      });

      const loaded = (i + 1) * CHUNK_SIZE > file.size ? file.size : (i + 1) * CHUNK_SIZE;
      const percent = ((loaded / file.size) * 100).toFixed(2);
      setProgress(Number(percent));

      blockIds.push(blockId);
    }

    // Commit all uploaded chunks
    const commitUrl = new URL('https://k4m2a-api.azurewebsites.net/api/ChunkFIleUploading/CommitBlocks/commit-blocks');
    commitUrl.searchParams.append('fileName', formattedName);

    await fetch(commitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blockIds)
    }).then(async (response) => {
      // console.log("result", response.text());

      if (!response.ok) {
        throw new Error(`Commit failed: ${response.statusText}`);
      }

      const result = await response.json(); // Parse the response JSON
      console.log("API response:", result);

    // }).then(async response => {
    //   console.log("result", typeof response);
    //   const videores = await JSON.parse(response);
    //   console.log("videores", videores)
    });

    alert("Upload complete");
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadFile(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <progress value={progress} max="100" style={{ width: '100%' }} />
      <p>{progress.toFixed(2)}%</p>
    </div>
  );
};

export default ChunkUploader;
