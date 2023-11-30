<script lang='ts'>
    import {menu} from '../lib/menu';

    export let isOpen:boolean = false;

    function closeMenu(){
        isOpen = !isOpen;
    }
</script>

<div class="container" class:open={isOpen}>
    <ul class="mainmenu">
        {#each $menu as item (item.id)}
            <li class="item {item.active ? 'active' : ''}">
                <a class="link" href="/{item.url}">{item.title}</a>
            </li>
        {/each}
    </ul>
    <span class="close" on:mousedown={closeMenu}></span>
</div>

<style lang="scss">

.mainmenu{
  display: flex;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.item{
    position: relative;
    height: 100%;
    &.active{
        .link{
            color: #64a507;
        }
    }
    &:before{
        content: '';
        position: absolute;
        z-index: 1;
        top: 50%;
        right: 0;
        width: 1px;
        height: 12px;
        margin-top: -6px;
        background-color: rgba(0,0,0,0.3);
    }
    &:last-child{
        &:before{
            content: none;
        }
    }
}

.link{
    display: flex;
    height: 100%;
    padding: 0 10px;
    align-items: center;
    color: var(--text-primary);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
}

@media only screen and (max-width: 767px){
    .container{
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        display: none;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: #fff;
        &.open{
            display: flex;
        }
    }

    .mainmenu{
        width: 320px;
        height: auto;
        flex-wrap: wrap;
    }

    .item{
        width: 100%;
        margin: 20px 0;
        &::before{
            content: none;
        }
    }

    .link{
        justify-content: center;
        text-align: center;
        box-sizing: border-box;
    }

    .close{
        position: absolute;
        top: 10px;
        right: 10px;
        display: block;
        width: 40px;
        height: 40px;
        background-image: url(/svg/close.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 24px auto;
    }
}
</style>