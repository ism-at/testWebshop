<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>
  
<main class="bg-[#171717] min-h-screen flex flex-col justify-between px-6">
  <Header />
    <div class="flex-1">
      <slot />  <!-- Content from child routes will be injected here -->
    </div>
  <Footer />
</main>