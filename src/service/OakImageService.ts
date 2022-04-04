export function base64ToFile(base64Content: string): Blob {
  const split = base64Content.split(',');
  const type = split[0].replace('data:', '').replace(';base64', '');
  const byteValue = atob(split[1]);
  const buffer = new ArrayBuffer(byteValue.length);
  const bufferArray = new Uint8Array(buffer);
  for (let i = 0; i < byteValue.length; i += 1) {
    bufferArray[i] = byteValue.charCodeAt(i);
  }
  return new Blob([buffer], {type});
}

export const fileToBase64 = (file: any) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    // Read file content on file loaded event
    reader.onload = function (event: any) {
      resolve(event.target.result);
    };

    // Convert data to base64
    reader.readAsDataURL(file);
  });
};

export const urlToBase64 = (url: any) => {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  });
};
