<script context="module" lang="ts">
	export const load: import('./index').Load = async ({ fetch }) => {
		return {
			props: {
				taken: await fetch('/taken.json').then((res) => res.json())
			}
		};
	};
</script>

<script lang="ts">
	import LinearLayout from '$lib/LinearLayout.svelte';
	import MezzanineRect from '$lib/MezzanineRect.svelte';
	import Seats from '$lib/Seats.svelte';
	import SeatsLinearLayout from '$lib/SeatsLinearLayout.svelte';
	import range from '$lib/utils/range';

	export let taken: (string | number)[][];
</script>

<h1>Svelte Seats</h1>

<div>
	<div style="min-width: 900px;">
		<Seats let:hovering {taken}>
			<div class="hovering">
				{hovering[0] ?? ''}
				{hovering[1] ?? ''}
			</div>

			<MezzanineRect>
				<div>
					<div class="main-grid">
						<div />
						<div />
						<MezzanineRect short>
							<SeatsLinearLayout
								columns={Array.from({ length: 3 }, (v, i) => i * 2 + 22)}
								rows={['PP', 'NN', 'MM', 'LL']}
								offsetColumns={22}
							/>
						</MezzanineRect>

						<div />

						<MezzanineRect short>
							<SeatsLinearLayout
								columns={Array.from({ length: 9 }, (v, i) => i * 2 + 2)}
								rows={['PP', 'NN', 'MM', 'LL', 'KK', 'JJ', 'HH', 'GG']}
								exclude={range(1, 8, 0, 0)}
								reverseColumns
							/>
						</MezzanineRect>

						<div />

						<MezzanineRect short>
							<SeatsLinearLayout
								columns={13}
								offsetColumns={101}
								exclude={range(0, 13, 0, 0)}
								rows={['PP', 'NN', 'MM', 'LL', 'KK', 'JJ', 'HH', 'GG']}
							/>
						</MezzanineRect>

						<div />

						<MezzanineRect short>
							<SeatsLinearLayout
								columns={Array.from({ length: 9 }, (v, i) => i * 2 + 1)}
								rows={['PP', 'NN', 'MM', 'LL', 'KK', 'JJ', 'HH', 'GG']}
								exclude={range(0, 7, 0, 0)}
							/>
						</MezzanineRect>

						<div />

						<MezzanineRect short>
							<SeatsLinearLayout
								columns={Array.from({ length: 3 }, (v, i) => i * 2 + 21)}
								rows={['PP', 'NN', 'MM', 'LL']}
								offsetColumns={22}
							/>
						</MezzanineRect>
					</div>

					<br />

					<div class="main-grid">
						<SeatsLinearLayout
							columns={Array.from({ length: 14 }, (v, i) => i * 2 + 2)}
							reverseColumns
							rows={['FF', 'EE', 'DD', 'CC', 'BB', 'AA']}
						/>

						<div />
						<LinearLayout columns={14} rows={6}>
							<SeatsLinearLayout
								columns={14}
								offsetColumns={100}
								rows={['FF']}
								exclude={[
									{
										x: 0,
										y: 0
									},
									{
										x: 13,
										y: 0
									}
								]}
							/>
							<SeatsLinearLayout
								columns={14}
								offsetColumns={101}
								rows={['EE', 'DD', 'CC', 'BB', 'AA']}
							/>
						</LinearLayout>

						<div />

						<LinearLayout columns={14} rows={6}>
							<SeatsLinearLayout
								columns={11}
								offsetColumns={1}
								rows={['FF']}
								incrementColums={2}
								style="transform: translateX(14%);"
							/>

							<SeatsLinearLayout
								offsetColumns={1}
								columns={14}
								rows={['EE', 'DD', 'CC', 'BB', 'AA']}
								incrementColums={2}
							/>
						</LinearLayout>
					</div>
				</div>
			</MezzanineRect>
			<br />
			<div class="main-grid" style="padding: 4px;">
				<div />
				<SeatsLinearLayout
					columns={13}
					offsetColumns={2}
					incrementColums={2}
					rows={23}
					alphabeticRows
					reverseColumns
					reverseRows
				/>

				<div />

				<SeatsLinearLayout columns={14} offsetColumns={101} rows={23} alphabeticRows reverseRows />

				<div />

				<SeatsLinearLayout
					columns={13}
					offsetColumns={1}
					rows={23}
					alphabeticRows
					reverseColumns
					reverseRows
				/>
			</div>
		</Seats>
	</div>
</div>

<style>
	h1 {
		text-align: center;
	}

	.main-grid {
		display: grid;
		grid-template-columns: repeat(44, 1fr);
		grid-auto-rows: auto;
	}

	.hovering {
		height: 20px;
		text-align: center;
	}
</style>
