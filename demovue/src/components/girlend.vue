<template>
	<div class="girlend">
		<component :is="$store.state.cname" ></component>
	</div>
</template>

<script>
	import Girl from '@/components/girl'
	import Pageend from '@/components/pageend'
	export default{
		data(){
			return{
								
			}
		},
		components:{Girl,Pageend},
		methods:{
			
		}
	}
</script>

<style>
</style>
