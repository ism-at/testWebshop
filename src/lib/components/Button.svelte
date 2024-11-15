<!-- To make the he text inside the button dynamic -->

<button on:click={() => console.log('Button clicked !')}>
    {buttonText}
</button>

<script>
    export let buttonText;
</script>



