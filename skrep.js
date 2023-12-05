gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );

  document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.ite');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.ite');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
  