<script>
    //import Button from "../lib/components/Button.svelte";
    import ShopCart from '../lib/components/ShopCart.svelte';
    export let data;
</script>

<!-- Render component -->
<!-- <Button buttonText="Click me!"/>
<Button buttonText="Check me!"/>  -->

<div class="grid grid-cols-3 gap-6 mt-6 mb-6">
    {#if data.products.length > 0}
        {#each data.products as product}
            <!-- <p>{product.name} / {product.price} / {product.description}</p> -->
            <ShopCart id={product.id} name{product.name} price={product.price} image={product.image}/>
        {/each}
    {:else}
        <p class="text-white text-center w-full pt-32">No products are currently avaliable</p>
    {/if}
</div>
