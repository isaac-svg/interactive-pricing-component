const range = document.querySelector<HTMLProgressElement>("#range");
const price = document.querySelector<HTMLSpanElement>(".price");
const pageViews = document.querySelector<HTMLSpanElement>(".page_views");
range?.addEventListener("input", (e) => {
  return (function () {
    let n: number = +e?.currentTarget?.value;
    price!.innerHTML = `$${n}.00`;
    if (n <= 10) {
      price!.innerHTML = `$${8}.00`;
      pageViews!.innerHTML = ` 10K PAGEVIEWS`;
    } else if (n <= 25 && n > 10) {
      price!.innerHTML = `$${12}.00`;
      pageViews!.innerHTML = ` 50K PAGEVIEWS`;
    } else if (n <= 50 && n > 25) {
      price!.innerHTML = `$${20}.00`;
      pageViews!.innerHTML = ` 100K PAGEVIEWS`;
    } else if (n <= 80 && n > 50) {
      price!.innerHTML = `$${30}.00`;
      pageViews!.innerHTML = ` 500K PAGEVIEWS`;
    } else {
      price!.innerHTML = `$${36}.00`;
      pageViews!.innerHTML = ` 1M PAGEVIEWS`;
    }
  })();
});
window.onload = function () {
  const range = document.querySelector<HTMLInputElement>("input[type='range']");
  price!.innerHTML = `$${8}.00`;
  pageViews!.innerHTML = ` 10K PAGEVIEWS`;
  range!.value = "10";
};
export {};
