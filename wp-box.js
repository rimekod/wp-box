const wpbox = {
    create: function(number, placeholder = "Send a message"){
        document.body.innerHTML = document.body.innerHTML + `
        <style>
            #wpbox-container {
                position: fixed;
                bottom: 30px;
                right: 30px;
            }
            #wp-box {
                height:80px;
                background: #128c7e;
                border-radius: 100px;
                display: flex;
                padding:10px;
                justify-content: space-between;
                box-sizing: border-box;
                min-width: 80px;
                position: relative;
            }
            #wp-box .logo-div {
                height: 100%;
                width: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
            #wp-box .logo-div img {
                width: 80%;
                filter: brightness(0) invert(1);
            }
            #wp-box .input-div {
                width: 0px;
                background: #075e54;
                border-radius: 50px;
                box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);
                display: flex;
                justify-content: space-between;
                padding: 10px;
                box-sizing: border-box;
                display: none;
            }
            #wp-box .input-div input {
                width: 75%;
                background: transparent;
                outline: none;
                border: none;
                box-sizing: border-box;
                color: #fff;
                font-family: arial;
                font-size:18px;
                font-weight: 300;
                padding-left: 10px;
            }
            #wp-box ::placeholder {
                color: #ece5dd;
            }
            #wp-box .input-div a {
                height: 100%;
                width: 20%;
                border-radius: 50px;
                background: #128c7e;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
            #wp-box .input-div a img {
                width: 20px;
                filter: brightness(0) invert(1);
            }
            #wp-box #close {
                position: absolute;
                left: -15px;
                border-radius: 50%;
                display: none;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
                top: 25px;
                width: 30px;
                height: 30px;
                cursor: pointer;
                background: #128c7e;
                border: 1px solid #075e54;
            }
            #wp-box #close img {
                transform: rotateZ(180deg);
                width: 20px;
                filter: brightness(0) invert(1);
            }
        </style>
        <div id="wpbox-container">
            <div id="wp-box">
                <div id="close">
                    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" alt="">
                </div>
                <div id="click" opened="false" class="logo-div">
                    <img src="https://i.pinimg.com/originals/7e/d9/89/7ed9897e90837063a9f7ad9b41f97435.png" alt="">
                </div>
                <div id="form" class="input-div">
                    <input type="text" placeholder="`+placeholder+`" id="message">
                    <a id="send" ><img src="https://image.flaticon.com/icons/png/512/60/60525.png" alt=""></a>
                </div>
            </div>
        </div>
        
        `;
            var Click = $("#click");
            var Form = $("#form");
            var Close = $("#close");
            var Send = $("#send");
            Click.on("click", function(){
                    Click.css({
                        "display": "none",
                    })
                    Close.css("display", "flex")
                    setTimeout(() => {
                        
                        Form.css({
                            "display":"flex",
                            "visibility":"hidden"
                        })
                        Form.animate({
                            "width": "290px",
                        },200)
                        setTimeout(() => {
                            Form.css({
                                "visibility":"visible"
                            })
                        }, 200);
                    }, 0);
            })
            Close.on("click", function(){
                Click.css({
                    "display": "flex",
                })
                Form.css({
                    "display":"none",
                })
                Form.animate({
                    "width": "0px",
                },200)
                Close.css("display", "none")
            })
            Send.on("click", function(){
                var value = $("#message").val();
                window.open(
                    "https://api.whatsapp.com/send/?phone="+number+"&text="+value+"&app_absent=0",
                    "_blank"
                  );
            })
        
    }
}
