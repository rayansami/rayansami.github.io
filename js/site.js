let site = function(){
    init();

    // function loadNavigationbar(){
       

    //     console.log('hit')
    //     fetch('Component/navigation-bar.html',{mode: 'no-cors'})
    //     .then(response => {response.text(); console.log(response.text())})
    //     .then((html) => {
    //         console.log(html)
    //         document.querySelector('.navigation-header').innerHTML = html
    //     })
    //     .catch((error) => {
    //         console.warn(error);
    //     })
    // }

    function init(){
        // Set footer
        let footerContent = document.getElementById('footer-content');
        footerContent.innerHTML = 'Sami - ' + new Date().getFullYear();
    }
}();