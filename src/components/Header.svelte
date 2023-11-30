<script lang='ts'>
	import Logo from "../components/Logo.svelte";
	import Nav from "../components/Nav.svelte";

    import { afterNavigate } from '$app/navigation';

    afterNavigate(() => {
        isMobileMenu = false; 
    });

    let isMobileMenu:boolean = false;

    function mobileClick(){
        isMobileMenu = true;
    }
</script>

<div class="header">
    <div class="work hl">
        <div class="line">
            <Logo />
            <div class="emptyFlex"></div>
            <Nav bind:isOpen={isMobileMenu} />
            <div class="mobile" on:mousedown={mobileClick}></div>
        </div>
    </div>
</div>

<style lang="scss">
.header{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: #fff;
    box-sizing: border-box;
    border-top: 5px solid #64a507;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.hl{
    height: 100%;
}

.line{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
}

.mobile{
    display: none;
}

@media only screen and (max-width: 767px){
    .mobile{
        display: block;
        width: 40px;
        height: 40px;
        background-image: url(/svg/menu.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 34px auto;
    } 
}
</style>