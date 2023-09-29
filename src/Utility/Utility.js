function ImageBase64(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  const data = new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });
  data.then((res) => console.log(res)).catch((err) => console.log(err));
  return data;
}

export { ImageBase64 };
