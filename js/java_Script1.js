
        // nav all button tag
        let _Course = document.getElementById('_Course');
        let _Learn = document.getElementById('_Learn');
        let _Upcoming = document.getElementById('_Upcoming');
        let _Templates = document.getElementById('_Templates');
        let _News = document.getElementById('_News');
        let _About = document.getElementById('_About');

        let _search_nav_icone = document.getElementById('_search_nav_icone');

        let _search_nav_icone_cancle = document.getElementById('_search_nav_icone_cancle');

        let heder_deteles_Image = document.getElementById('heder-deteles_Image');

        
        let Login_Button = document.getElementById('Login_Button');
        let Login_Button_Menu = document.getElementById('Login_Button_Menu');

        let Side_menu_Button = document.getElementById('Side_menu_Button');
        let clear_MenuTab = document.getElementById('clear_MenuTab');
        
        //................................................................................................
        let Course_in_Menu = document.getElementById('Course_in_Menu');
        let Learn_in_Menu = document.getElementById('Learn_in_Menu');
        let Upcoming_in_Menu = document.getElementById('Upcoming_in_Menu');
        let Templates_in_Menu = document.getElementById('Templates_in_Menu');
        let News_in_Menu = document.getElementById('News_in_Menu');
        let About_in_Menu = document.getElementById('About_in_Menu');



        
        //pop up menu
        let Nav_floting_1 = document.getElementById('Nav_floting_1');
        let Nav_floting_2 = document.getElementById('Nav_floting_2');
        let Nav_floting_3 = document.getElementById('Nav_floting_3');
        let Nav_floting_4 = document.getElementById('Nav_floting_4');

        let Nav_floting_Search = document.getElementById('Nav_floting_Search');

        let Side_Menu = document.getElementById('Side_Menu');

        //.................................................................................

        let Course_Option = document.getElementById('Course_Option');
        let Learn_Option = document.getElementById('Learn_Option');
        let Upcoming_Option = document.getElementById('Upcoming_Option');
        let Templates_Option = document.getElementById('Templates_Option');


        // let Main_Side_Menu = document.getElementById('Main_Side_Menu');


        // start

        Nav_floting_1.style.height ="0px";
        Nav_floting_2.style.height ="0px";
        Nav_floting_3.style.height ="0px";
        Nav_floting_4.style.height ="0px";

        Nav_floting_Search.style.height ="0px";

        _search_nav_icone_cancle.style.transform="scale(0)";

        Side_Menu.style.width="0%";
        Side_Menu.style.opacity="0";

        //..................................................

        Course_Option.style.display="none";
        Learn_Option.style.display="none";
        Upcoming_Option.style.display="none";
        Templates_Option.style.display="none";




        let _nav_Active_1 = false;
        let _nav_Active_2 = false;
        let _nav_Active_3 = false;
        let _nav_Active_4 = false;
        let _nav_Active_5 = false;
        let _nav_Active_6 = false;

        let _nav_Active_Search = false;


        // ....................................................
        let Menu_Active = false;





        // update
        _Course.onclick = function(){
            nav_buttom_click(1)
        };

        _Learn.onclick = function(){
            nav_buttom_click(2)
        };

        _Upcoming.onclick = function(){
            nav_buttom_click(3)
        };

        _Templates.onclick = function(){
            nav_buttom_click(4)
        };

        _News.onclick = function(){
            nav_buttom_click(5)
        };

        _About.onclick = function(){
            nav_buttom_click(6)
        };

        _search_nav_icone.onclick = function(){
            Search_Nav_Button_click()
        };

        _search_nav_icone_cancle.onclick = function(){
            Search_Nav_Button_click()
        };

        heder_deteles_Image.onclick = function(){
            // Search_Nav_Button_click()
            window.open("https://www.google.com/search?q=skeleton+__45&rlz=1C1ONGR_enIN984IN984&sxsrf=APq-WBsPG8YwRpoCQNH0wzKb_-KWaTgBvQ%3A1648623859103&ei=8wBEYqfbBauKseMPg4mhwAQ&ved=0ahUKEwjnoPW7ou32AhUrRWwGHYNECEgQ4dUDCA4&uact=5&oq=skeleton+__45&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEAcQHjIGCAAQBxAeMgQIABAeMgYIABAFEB4yCAgAEA0QBRAeMgYIABAFEB4yBggAEAUQHjIICAAQCBANEB4yBggAEAgQHjIGCAAQCBAeOgQIABBHSgQIQRgASgQIRhgAUIYJWIYJYOULaABwAngAgAG6AogBugKSAQMzLTGYAQCgAQHIAQTAAQE&sclient=gws-wiz");
        };

        Login_Button.onclick =function(){
            alert("Login");
        };
        Login_Button_Menu.onclick =function(){
            alert("Login");
        };

        Side_menu_Button.onclick =function(){
            _Side_Menu_Click();
        };

        clear_MenuTab.onclick =function(){
            _Side_Menu_Click();
        };



        Course_in_Menu.onclick =function(){
            Menu_buttom_click(1);
        };
        Learn_in_Menu.onclick =function(){
            Menu_buttom_click(2);
        };
        Upcoming_in_Menu.onclick =function(){
            Menu_buttom_click(3);
        };
        Templates_in_Menu.onclick =function(){
            Menu_buttom_click(4);
        };
        About_in_Menu.onclick =function(){
            Menu_buttom_click(5);
        };
        News_in_Menu.onclick =function(){
            Menu_buttom_click(6);
        };






        




        function _Side_Menu_Click(){
            if(Menu_Active)
            {
                Side_Menu.style.width="0%";
                Side_Menu.style.opacity="0";
                Menu_Active = false;

                Course_Option.style.display="none";
                Learn_Option.style.display="none";
                Upcoming_Option.style.display="none";
                Templates_Option.style.display="none";

                Course_in_Menu.classList.remove("nav_Active");
                Learn_in_Menu.classList.remove("nav_Active");
                Upcoming_in_Menu.classList.remove("nav_Active");
                Templates_in_Menu.classList.remove("nav_Active");
                News_in_Menu.classList.remove("nav_Active");
                About_in_Menu.classList.remove("nav_Active");
            }else{
                Side_Menu.style.width="100%";
                Side_Menu.style.opacity="1";
                Menu_Active = true;
            }
        }


        function Search_Nav_Button_click() {

            if(_nav_Active_Search == true)
            {
                Nav_floting_Search.style.height ="0px";
                _search_nav_icone_cancle.style.transform="scale(0)";

                _nav_Active_Search = false;

            }else{

                Nav_floting_Search.style.height ="200px";

                _search_nav_icone_cancle.style.transform="scale(.1)";


                _nav_Active_Search = true;

            }
            
            
        }

        function Menu_buttom_click(number){
            if(number == 1)
            {
                Course_Option.style.display="";
                Learn_Option.style.display="none";
                Upcoming_Option.style.display="none";
                Templates_Option.style.display="none";


                Course_in_Menu.className="nav_Active";
                Learn_in_Menu.classList.remove("nav_Active");
                Upcoming_in_Menu.classList.remove("nav_Active");
                Templates_in_Menu.classList.remove("nav_Active");
                News_in_Menu.classList.remove("nav_Active");
                About_in_Menu.classList.remove("nav_Active");


            }else if(number == 2)
            {
                Course_Option.style.display="none";
                Learn_Option.style.display="";
                Upcoming_Option.style.display="none";
                Templates_Option.style.display="none";

                Course_in_Menu.classList.remove("nav_Active");
                Learn_in_Menu.className="nav_Active";
                Upcoming_in_Menu.classList.remove("nav_Active");
                Templates_in_Menu.classList.remove("nav_Active");
                News_in_Menu.classList.remove("nav_Active");
                About_in_Menu.classList.remove("nav_Active");
                
                
            }else if(number == 3)
            {
                Course_Option.style.display="none";
                Learn_Option.style.display="none";
                Upcoming_Option.style.display="";
                Templates_Option.style.display="none";

                Course_in_Menu.classList.remove("nav_Active");
                Learn_in_Menu.classList.remove("nav_Active");
                Upcoming_in_Menu.className="nav_Active";
                Templates_in_Menu.classList.remove("nav_Active");
                News_in_Menu.classList.remove("nav_Active");
                About_in_Menu.classList.remove("nav_Active");
                
                
            }else if(number == 4)
            {
                Course_Option.style.display="none";
                Learn_Option.style.display="none";
                Upcoming_Option.style.display="none";
                Templates_Option.style.display="";

                Course_in_Menu.classList.remove("nav_Active");
                Learn_in_Menu.classList.remove("nav_Active");
                Upcoming_in_Menu.classList.remove("nav_Active");
                Templates_in_Menu.className="nav_Active";
                News_in_Menu.classList.remove("nav_Active");
                About_in_Menu.classList.remove("nav_Active");
                
                
            }else if(number == 5)
            {
                Course_Option.style.display="none";
                Learn_Option.style.display="none";
                Upcoming_Option.style.display="none";
                Templates_Option.style.display="none";

                Course_in_Menu.classList.remove("nav_Active");
                Learn_in_Menu.classList.remove("nav_Active");
                Upcoming_in_Menu.classList.remove("nav_Active");
                Templates_in_Menu.classList.remove("nav_Active");
                News_in_Menu.className="nav_Active";
                About_in_Menu.classList.remove("nav_Active");
                
                
            }else if(number == 6)
            {
                Course_Option.style.display="none";
                Learn_Option.style.display="none";
                Upcoming_Option.style.display="none";
                Templates_Option.style.display="none";

                Course_in_Menu.classList.remove("nav_Active");
                Learn_in_Menu.classList.remove("nav_Active");
                Upcoming_in_Menu.classList.remove("nav_Active");
                Templates_in_Menu.classList.remove("nav_Active");
                News_in_Menu.classList.remove("nav_Active");
                About_in_Menu.className="nav_Active";
                
                
            }else {
                Course_Option.style.display="none";
                Learn_Option.style.display="none";
                Upcoming_Option.style.display="none";
                Templates_Option.style.display="none";
                

                Course_in_Menu.classList.remove("nav_Active");
                Learn_in_Menu.classList.remove("nav_Active");
                Upcoming_in_Menu.classList.remove("nav_Active");
                Templates_in_Menu.classList.remove("nav_Active");
                News_in_Menu.classList.remove("nav_Active");
                About_in_Menu.classList.remove("nav_Active");
                
            }
        }





        function nav_buttom_click(number) {

            Show_nav_option(0);
            

            if(number == 1)
            {

                if(_nav_Active_1 == true ){

                    _nav_Active_1 = false;

                    _Course.classList.remove("nav_Active");
                    _Learn.classList.remove("nav_Active");
                    _Upcoming.classList.remove("nav_Active");
                    _Templates.classList.remove("nav_Active");
                    _News.classList.remove("nav_Active");
                    _About.classList.remove("nav_Active");

                    Show_nav_option(0);

                }else{
                    _Course.className="nav_Active";
                    _Learn.classList.remove("nav_Active");
                    _Upcoming.classList.remove("nav_Active");
                    _Templates.classList.remove("nav_Active");
                    _News.classList.remove("nav_Active");
                    _About.classList.remove("nav_Active");
                    
                    _nav_Active_1 = true;
                    _nav_Active_2 = false;
                    _nav_Active_3 = false;
                    _nav_Active_4 = false;
                    _nav_Active_5 = false;
                    _nav_Active_6 = false;


                    Show_nav_option(1);

                }


                
            }else if(number == 2)
            {
                


                if(_nav_Active_2 == true){

                    _nav_Active_2 = false;

                    _Course.classList.remove("nav_Active");
                    _Learn.classList.remove("nav_Active");
                    _Upcoming.classList.remove("nav_Active");
                    _Templates.classList.remove("nav_Active");
                    _News.classList.remove("nav_Active");
                    _About.classList.remove("nav_Active");

                    Show_nav_option(0);

                }else{
                    _Course.classList.remove("nav_Active");
                    _Learn.className="nav_Active";
                    _Upcoming.classList.remove("nav_Active");
                    _Templates.classList.remove("nav_Active");
                    _News.classList.remove("nav_Active");
                    _About.classList.remove("nav_Active");

                    _nav_Active_1 = false;
                    _nav_Active_2 = true;
                    _nav_Active_3 = false;
                    _nav_Active_4 = false;
                    _nav_Active_5 = false;
                    _nav_Active_6 = false;

                    Show_nav_option(2);


                }



            }else if(number == 3)
            {


                if(_nav_Active_3 == true){

                    _nav_Active_3 = false;

                    _Course.classList.remove("nav_Active");
                    _Learn.classList.remove("nav_Active");
                    _Upcoming.classList.remove("nav_Active");
                    _Templates.classList.remove("nav_Active");
                    _News.classList.remove("nav_Active");
                    _About.classList.remove("nav_Active");

                    Show_nav_option(0);


                }else{
                    _Course.classList.remove("nav_Active");
                    _Learn.classList.remove("nav_Active");
                    _Upcoming.className="nav_Active";
                    _Templates.classList.remove("nav_Active");
                    _News.classList.remove("nav_Active");
                    _About.classList.remove("nav_Active");

                    _nav_Active_1 = false;
                    _nav_Active_2 = false;
                    _nav_Active_3 = true;
                    _nav_Active_4 = false;
                    _nav_Active_5 = false;
                    _nav_Active_6 = false;

                    Show_nav_option(3);


                }
            }else if(number == 4)
            {

                if(_nav_Active_4 == true){

                    _nav_Active_4 = false;

                    _Course.classList.remove("nav_Active");
                    _Learn.classList.remove("nav_Active");
                    _Upcoming.classList.remove("nav_Active");
                    _Templates.classList.remove("nav_Active");
                    _News.classList.remove("nav_Active");
                    _About.classList.remove("nav_Active");

                    Show_nav_option(0);


                }else{
                    _Course.classList.remove("nav_Active");
                    _Learn.classList.remove("nav_Active");
                    _Upcoming.classList.remove("nav_Active");
                    _Templates.className="nav_Active";
                    _News.classList.remove("nav_Active");
                    _About.classList.remove("nav_Active");

                    _nav_Active_1 = false;
                    _nav_Active_2 = false;
                    _nav_Active_3 = false;
                    _nav_Active_4 = true;
                    _nav_Active_5 = false;
                    _nav_Active_6 = false;

                    Show_nav_option(4);

                }
            }else if(number == 5)
            {

                if(_nav_Active_5 == true){

                    _nav_Active_5 = false;

                    _Course.classList.remove("nav_Active");
                    _Learn.classList.remove("nav_Active");
                    _Upcoming.classList.remove("nav_Active");
                    _Templates.classList.remove("nav_Active");
                    _News.classList.remove("nav_Active");
                    _About.classList.remove("nav_Active");

                    Show_nav_option(0);


                }else{
                    _Course.classList.remove("nav_Active");
                    _Learn.classList.remove("nav_Active");
                    _Upcoming.classList.remove("nav_Active");
                    _Templates.classList.remove("nav_Active");
                    _News.className="nav_Active";
                    _About.classList.remove("nav_Active");

                    _nav_Active_1 = false;
                    _nav_Active_2 = false;
                    _nav_Active_3 = false;
                    _nav_Active_4 = false;
                    _nav_Active_5 = true;
                    _nav_Active_6 = false;

                    Show_nav_option(0);


                }
            }else if(number == 6)
            {

                if(_nav_Active_6 == true){

                    _nav_Active_6 = false;

                    _Course.classList.remove("nav_Active");
                    _Learn.classList.remove("nav_Active");
                    _Upcoming.classList.remove("nav_Active");
                    _Templates.classList.remove("nav_Active");
                    _News.classList.remove("nav_Active");
                    _About.classList.remove("nav_Active");

                    Show_nav_option(0);


                }else{
                    _Course.classList.remove("nav_Active");
                    _Learn.classList.remove("nav_Active");
                    _Upcoming.classList.remove("nav_Active");
                    _Templates.classList.remove("nav_Active");
                    _News.classList.remove("nav_Active");
                    _About.className="nav_Active";


                    _nav_Active_1 = false;
                    _nav_Active_2 = false;
                    _nav_Active_3 = false;
                    _nav_Active_4 = false;
                    _nav_Active_5 = false;
                    _nav_Active_6 = true;

                    Show_nav_option(0);
                }
            }else {

            }
            
        }

        function Show_nav_option(show) {

            if(show == 1)
            {
                Nav_floting_1.style.height ="400px";
                Nav_floting_2.style.height ="0px";
                Nav_floting_3.style.height ="0px";
                Nav_floting_4.style.height ="0px";

                Nav_floting_1.style.zIndex ="1";
                Nav_floting_2.style.zIndex ="0";
                Nav_floting_3.style.zIndex ="0";
                Nav_floting_4.style.zIndex ="0";

            }else if(show == 2)
            {
                Nav_floting_1.style.height ="0px";
                Nav_floting_2.style.height ="400px";
                Nav_floting_3.style.height ="0px";
                Nav_floting_4.style.height ="0px";

                Nav_floting_1.style.zIndex ="0";
                Nav_floting_2.style.zIndex ="1";
                Nav_floting_3.style.zIndex ="0";
                Nav_floting_4.style.zIndex ="0";

            }else if(show == 3)
            {
                Nav_floting_1.style.height ="0px";
                Nav_floting_2.style.height ="0px";
                Nav_floting_3.style.height ="400px";
                Nav_floting_4.style.height ="0px";

                Nav_floting_1.style.zIndex ="0";
                Nav_floting_2.style.zIndex ="0";
                Nav_floting_3.style.zIndex ="1";
                Nav_floting_4.style.zIndex ="0";

            }else if(show == 4)
            {
                Nav_floting_1.style.height ="0px";
                Nav_floting_2.style.height ="0px";
                Nav_floting_3.style.height ="0px";
                Nav_floting_4.style.height ="400px";

                Nav_floting_1.style.zIndex ="0";
                Nav_floting_2.style.zIndex ="0";
                Nav_floting_3.style.zIndex ="0";
                Nav_floting_4.style.zIndex ="1";
            }else
            {
                Nav_floting_1.style.height ="0px";
                Nav_floting_2.style.height ="0px";
                Nav_floting_3.style.height ="0px";
                Nav_floting_4.style.height ="0px";

                Nav_floting_1.style.zIndex ="0";
                Nav_floting_2.style.zIndex ="0";
                Nav_floting_3.style.zIndex ="0";
                Nav_floting_4.style.zIndex ="0";
            }

        }

        function relode()
        {
            location.reload(true);
        }




