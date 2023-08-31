<script>
	import Counter from "./components/Counter.svelte";

	import svelteLogo from "./assets/svelte.svg";
	import viteLogo from "./assets/vite.svg";
	import electronLogo from "./assets/electron.svg";
	import tailwindLogo from "./assets/tailwind.svg";
	import typescriptLogo from "./assets/typescript.svg";

	let runningInElectron = false;
	let nodeVersion = null;
	let chromeVersion = null;
	let electronVersion = null;
	if(typeof api !== "undefined") {
		nodeVersion = api.node();
		chromeVersion = api.chrome();
		electronVersion = api.electron();
		runningInElectron = true;
	}

</script>

<main class="min-h-screen bg-slate-900 text-white flex flex-col">
	
	<section class="flex justify-center items-center h-48">
		<div class="flex items-center space-x-4 gap-4 md:gap-16 flex-wrap">
			<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
				<img
					class="h-20  hover:drop-shadow-[0_0_2rem_#ac00ac] transition-all duration-300"
					src={viteLogo}
					alt="Vite logo"
				/>
			</a>

			<a href="https://svelte.dev/" target="_blank" rel="noreferrer">
				<img
					class="h-20  hover:drop-shadow-[0_0_2rem_#ff3e00aa] transition-all duration-300"
					src={svelteLogo}
					alt="Svelte logo"
				/>
			</a>

			<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
				<img
					class="h-20 hover:drop-shadow-[0_0_2rem_#3178c6] transition-all duration-300"
					src={typescriptLogo}
					alt="Typescript logo"
				/>
			</a>

			<a href="https://www.electronjs.org/" target="_blank" rel="noreferrer">
				<img
					class="h-20  hover:drop-shadow-[0_0_2rem_#237d8f] transition-all duration-300"
					src={electronLogo}
					alt="Electron logo"
				/>
			</a>

			<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
				<img
					class="h-20  hover:drop-shadow-[0_0_2rem_#171bff] transition-all duration-300 rounded-full p-1 bg-gradient-to-tr from-indigo-900 to-cyan-700"
					src={tailwindLogo}
					alt="Tailwind logo"
				/>
			</a>
		</div>
	</section>

	
	
	<section class="flex flex-col items-center justify-center mt-6">
		<h1 class="text-4xl font-bold">Vite + Svelte + TS + Electron + Tailwind</h1>
		<p class="mt-6"> 
			{#if runningInElectron}
			Node version: {nodeVersion} | Chrome version: {chromeVersion} | Electron version:
			{electronVersion}
			{:else}
			You are not running in Electron
			{/if}
		</p>
			
		<div>
			<Counter />
		</div>
	</section>

</main>
