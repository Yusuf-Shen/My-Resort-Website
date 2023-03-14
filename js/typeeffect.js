<button onclick="typeWriter()">Click me</button>
<h1 class="type"></h1>
<script>
    let i = 0;
    let txt = '';
    let speed = 40;
    
    function typeWrite() {
      if (i < txt.length) {
        document.getElementsByClassName("type").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWrite, speed);
      }
    }
</script>