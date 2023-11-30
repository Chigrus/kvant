<script lang='ts'>
    import type {Post} from '../routes/types';
    export let post: Post;

    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
</script>

<a href="/news/{post.slug}" class="block">
    <div class="head" style="background-image: url({post.icon})">
        <span class="date">{monthNames[post.date.getMonth()]} {post.date.getDate()}, {post.date.getUTCFullYear()}</span>
    </div>
    <h3 class="title">{@html post.title}</h3>
    <div class="text">{@html post.text}</div>
    <div class="line">
        <span class="more">Подробнее</span>
    </div>
</a>

<style lang="scss">
.block{
    position: relative;
    text-decoration: none;
}

.head{
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 240px;
    background-color: rgba(0, 0, 0, 0.1);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.date{
    padding: 12px 25px;
    background-color: var(--bg-third);
    color: var(--text-4);
    font-size: 14px;
    border-radius: 25px;
    margin-bottom: 10px;
}

.title{
    width: 100%;
    margin-top: 20px;
    padding-bottom: 15px;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid #d6d6d6;
    color: var(--text-primary);
}

.text{
    width: 100%;
    margin-top: 15px;
    font-size: 14px;
    line-height: 1.4em;
    color: var(--text-secondary);
}

.line{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 15px;
}

.more{
    display: inline-block;
    text-transform: uppercase;
    padding-right: 18px;
    color: var(--text-third);
    font-weight: 500;
    background-image: url(svg/more.svg);
    background-position: right center;
    background-size: 12px auto;
    background-repeat: no-repeat;
}
</style>