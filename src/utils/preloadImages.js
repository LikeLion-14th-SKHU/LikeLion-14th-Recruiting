const loaded = new Set();

export function preloadImages(srcList = []) {
  srcList.forEach((src) => {
    if (!src || loaded.has(src)) return;
    loaded.add(src);

    const img = new Image();
    img.decoding = "async";
    img.loading = "eager";
    img.src = src;
  });
}
