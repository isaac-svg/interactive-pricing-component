export const Card = (): string => {
  let count: number = 0;
  const windowWidthChanged = (): number => {
    let windowWidth: number;
    windowWidth = window.innerWidth;
    console.log((count += 1), "h");
    console.log(windowWidth, "width");
    return windowWidth;
  };
  window.onload = windowWidthChanged;
  window.addEventListener("resize", windowWidthChanged);
  let cardContent: string = `
<div class="card">
<div class="interaction">
  <div class="head"><h4 class="text page_views">100K PAGEVIEWS</h4>
  ${
    windowWidthChanged() > 520
      ? `<div class="prices">
  <span class="price">$0.00</span> <span class="text month">/month</span>
</div> `
      : ""
  }</div>
<div class="input"><input type="range" id="range" min= "0" max ="100" />
</div>

${
  windowWidthChanged() < 520
    ? `      <div class="prices">
  <span class="price">$16.00</span> <span class="text month">/month</span>
  </div>`
    : ""
}
      <div class="billing">
          <div class="monthly__billing bill">
              <span class="text bill_msg ">Monthly Billing <button class="month__btn"><div id="role"></div></button></span>
              
          </div>
          <div class="yearly__billing bill">
              <span class="text bill_msg">Yearly Billing   <span class="discount">-25%</span></span>
            
          </div>
      </div>
</div>
<div class="info">
  
      <div class="offers">
          <ul>
              <li class='text'>Unlimited websites</li>
              <li class='text'>100% data ownership</li>
              <li class='text off'>Email reports</li>
          </ul>
      </div>
  
 <button class="offer__btn">
      Start my trial
  </button>
</div>
</div>`;

  return cardContent;
};
//
