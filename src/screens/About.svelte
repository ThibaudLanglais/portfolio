<style>
  .content-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .museum {
    display: grid;
    grid-template-rows: min-content;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: flex-start;
    gap: 15px;
    padding: 15px 15px 0;
  }
  .text {
      padding: 20% 0 20% 35%;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-direction: column;
      font-size: 25px;
      text-shadow: 3px 3px #F16D6D;
  }
  .museumItem{
      width: 100%;
        background-color: white;
        border: 25px solid black;
        box-sizing: border-box;
        margin-bottom: 15px;
  }
  .left, .right{
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  img{
    height: 100%;
    width: 100%;
  }
  .photo{
    overflow: hidden;
  }
</style>

<div class="content-container">
  <div class="museum">
      <div class="left">
          <div class="museumItem" style="height: 45%; background-color: rgba(255,0,0,0.73)"></div>
          <div class="museumItem" style="height: 35%"></div>
          <div class="museumItem" style="height: 30%"></div>
      </div>
      <div class="right">
        <div class="museumItem" style="height: 30%;"></div>
        <div class="museumItem photo" style="height: 35%"><img title="C'est moi" src="./photo.jpg" alt="Thibaud Langlais"></div>
        <div class="museumItem" style="height: 35%; background-color: rgba(255,239,0,0.7)"></div>
      </div>
  </div>
  <div class="text">
      <p>19 YEARS OLD, I ENJOY</p>
      <p>PROGRAMING, LEARNING NEW</p>
      <p>STUFF, AND DOING STUFF</p>
  </div>
</div>
