<script>
  import About from "./About.svelte";
</script>

<style>
  h2 {
    font-family: "Raleway";
    font-size: 50px;
  }
  h1 {
    color: white;
    font-size: 130px;
    line-height: 50px;
    -webkit-text-stroke: 2px black; /* width and color */
  }
  .red {
    color: red;
  }
  .blue {
    color: #006fff;
  }
  .content-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: flex-start;
  }
  .texts {
    margin-top: 17%;
    width: 70%;
    justify-self: center;
    height: 100%;
    padding-left: 20%;
  }
  img {
    transform: rotate(-90deg);
    width: 50%;
  }
  .logo {
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>

<div class="content-container">
  <div class="texts">
    <h1>THIBAUD</h1>
    <h1>LANGLAIS</h1>
    <h2>WE<span class="red">B</span>-DEVEL<span class="blue">O</span>PER</h2>
  </div>
  <div class="logo">
    <img src="./logoNoir.svg" alt="" />
  </div>
</div>
