#leaf-container{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    pointer-events:none;
    overflow:hidden;
    z-index:-1;
}

.weather{
    position:fixed;
    top:-80px;
    animation:fall linear forwards;
}

@keyframes fall{

    from{
        transform:translateY(0) rotate(0deg);
    }

    to{
        transform:translateY(110vh) rotate(360deg);
    }

}
