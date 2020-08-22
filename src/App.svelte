<script>
  let drawerOpened = false;
    let notHomePage = false;
  let currentPageIndex = 0;
  //   let notHomePage = true;
  // let currentPageIndex = 1;
  let color;
  let pages = ["homeBG", "aboutBG", "workBG", "contactBG"];
  import Home from "./screens/Home.svelte";
  import About from "./screens/About.svelte";
  import Work from "./screens/Work.svelte";
  function triggerDrawer(event) {
    event.preventDefault();
    drawerOpened = !drawerOpened;
  }
</script>

<style>
  .blur {
    width: 100%;
    height: 100%;
    position: absolute;
    background-repeat: repeat;
    background-size: 75px;
    background-position: -35px -35px;
  }
  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    border: 35px solid black;
    box-sizing: border-box;
    transition: transform 0.2s;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 0 50px black;
  }
  .drawer {
    transform: translateX(100%);
    height: 100%;
    width: 25%;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform 0.3s;
    background-color: black;
    border-top: 1px solid black;
  }
  .opened {
    transform: translateX(0);
  }
  .drawer-trigger {
    position: absolute;
    top: 6px;
    left: -70px;
    cursor: pointer;
    height: 50px;
    width: 50px;
    border: 7px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    box-sizing: content-box;
  }
  .drawer-trigger > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    width: 70%;
    position: absolute;
  }
  .drawer-trigger > div > div {
    height: 5px;
    width: 100%;
    background-color: black;
  }
  .drawer-closed-content {
    visibility: hidden;
  }
  .drawer-content {
    color: white;
  }
  .content {
    height: 100%;
    width: 100%;
  }
  .scaledDown {
    transform: scale(0.8);
  }
  .bigTitle {
    position: absolute;
    top: 0;
    left: 50%;
    font-size: 100px;
    margin: 0;
    transform: translate(-50%, 20%);
    transition: transform 0.3s;
  }
  .bigTitle:hover {
    transform: translate(-50%, -3%);
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    text-decoration: none;
	padding-left: 35px;
	justify-content: start;
	margin-top: 10%;
  }
  .liLogo {
    width: 70%;
  }
  .liLogo img{
	  width: 100%;
  }
  li {
	  width: 70%;
  }
  .liContainer{
	  margin-top: 10%;
	  width: 100%;
	  display: grid;
	grid-template-columns: 4fr 2fr;
	gap: 15px;
}
.liContainer li{
	margin: 15px 0;
}
.liContainer>div:first-child{
	display: flex;
	position: relative;
	right: -100%;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	transition: transform 0.3s 0.3s;
}
.activeMenu{
	transform: translateX(-100%);
}
.divider{
	z-index: 1;
	background-color: black;
	border-left: 5px solid white;
}
.cross>div{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  transform-origin: 50% 50%;
}
.cross>div:first-child{
  transform: translate(-50%,-50%) rotate(45deg);
}
.cross>div:last-child{
  transform: translate(-50%,-50%) rotate(-45deg);
}
.cross{
  position: relative;
}
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,900&display=swap"
    rel="stylesheet" />
</svelte:head>
<main>
  <div
    class="blur"
    style={notHomePage ? `background-image : url('./${pages[currentPageIndex]}.jpg');` : ''} />
  {#if notHomePage}
    <h1 class="bigTitle">
      {pages[currentPageIndex].split('BG')[0][0].toUpperCase()}
      <span style="color: {color}">
        {pages[currentPageIndex].split('BG')[0][1].toUpperCase()}
      </span>
      {pages[currentPageIndex].split('BG')[0].substr(2).toUpperCase()}
    </h1>
  {/if}
  <div class="container black-border {notHomePage ? 'scaledDown' : ''}">
    <div class="content">
      {#if currentPageIndex === 0}
        <Home />
      {:else if currentPageIndex === 1}
        <About />
      {:else if currentPageIndex === 2}
        <Work />
      {/if}
    </div>
    <div class="drawer {drawerOpened ? 'opened' : ''}">
      <button class="drawer-trigger" on:click={triggerDrawer}>
          {#if !drawerOpened}
          <div>
            <div />
            <div />
            <div />
          </div>  
          {:else}
          <div class="cross">
            <div />
            <div />
          </div>
          {/if}
      </button>
      <div
        class="drawer-content {!drawerOpened ? 'drawer-closed-content' : ''}">
        <nav>
          <li class="liLogo">
            <a
              href="/"
              on:click|preventDefault={() => {
                currentPageIndex = 0;
                notHomePage = false;
                drawerOpened = !drawerOpened
              }}>
              <img src="./logoBlanc.svg" alt="Go To Home" />
            </a>
          </li>
          <div class="liContainer">
			<div class=" { drawerOpened ? 'activeMenu' : ''}">
				<li>
					<a
					  href="/"
					  on:click|preventDefault={() => {
						currentPageIndex = 1;
						notHomePage = true;
            color = '#006FFF';
            drawerOpened = !drawerOpened
					  }}>
					  <img src="./aboutMenu.svg" alt="go to about">
					</a>
				  </li>
				  <li>
					<a
					  href="/"
					  on:click|preventDefault={() => {
						currentPageIndex = 2;
						notHomePage = true;
            color = 'red';
            drawerOpened = !drawerOpened
					  }}>
					  <img src="./workMenu.svg" alt="Go to works">
					</a>
				  </li>
				  <li>
					<a
					  href="/"
					  on:click|preventDefault={() => {
						currentPageIndex = 3;
						notHomePage = true;
            color = '#FFE600';
            drawerOpened = !drawerOpened
					  }}>
					  <img src="./contactMenu.svg" alt="Go To Contact">
					</a>
				  </li>
			</div>
			<div class="divider">
			</div>
		  </div>
        </nav>
      </div>
    </div>
  </div>
</main>
