<template>
    <div class="kocsma-second-screen-component row">
        <div class="col-sm-12 col-md-6 main-col">
			<div class="row">
                <div class="col-xs-12">
                    <h2>Kevert italok</h2>
                </div>
                <div class="col-md-6">
                    Rumbó<br>
						<div class="italic-details">Rum + 2cl Borovička</div><br>
					Vodkanarancs<br>
						<br>
						<div class="italic-details">4 cl vodka + 2 dl narancslé</div><br>
					Túrós rétes<br>
						<div class="italic-details">2cl Captain Morgan + cukor + citrom + 2 dl gyömbér</div><br>
					Veszett kutya<br>
						<div class="italic-details">4cl Finlandia + erdei gyümölcsös szörp + tabasco szósz</div><br>
					Beton<br>
						<div class="italic-details">4cl Becherovka + 2dl tonic</div><br>
                </div>
                <div class="col-md-6">
                    1,20€<br>
						<br>
                    vodkából 2,30€<br>
						Finlandiából 3,30€<br>
						<br>
                    2,50€<br>
						<br>
                    2,50€<br>
						<br>
                    2,70€<br>
						<br>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <h2>Alkoholmentes italok</h2>
                </div>
                <div class="col-md-9">
                    <br>
                    Csapolt Kofola<br>
                    Szörp<br>
                    Almafröccs (2-3)<br><br>
                    Cloudy Apple almalé<br>
                    Narancslé<br>
                    Tonic/Gyömbér<br>
                    Szóda<br>
                    Red Bull
                </div>
                <div class="col-md-1">
                    <strong>0,3 l</strong><br>
                    0,70€<br>
                    0,90€
                </div>
                <div class="col-md-2">
                    <strong>0,5 l</strong><br>
                    1,00€<br>
                    1,30€<br>
                    1,60€<br><br>
                    0,50€ / dl<br>
                    0,60€ / dl<br>
                    0,50€ / dl<br>
                    0,20€ / dl<br>
                    2,00€ / db
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-6 main-col">
            <div class="row">
                <div class="col-xs-12">
                    <h2>Kávé/Tea</h2>
                </div>
                <div class="col-md-6" style="text-align: left;">
                    Espresso/Lungo<br>
                    Tea<br>
                    Öngyújtó<br>
                    REPOHÁR 1 dl<br>
                    REPOHÁR 0,5 l<br>
                </div>
                <div class="col-md-6">
                    1,50€<br>
                    1,00€<br>
                    1,00€<br>
                    1€ / pohár<br>
                    2€ / pohár<br><br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'KocsmaSecondScreen',

    data() {
        return {
        }
    },

    methods: {

    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/sass/tavern.scss';
	.italic-details {
		margin-left: 40px;
		font-style: italic;
		font-size: 0.8em;
		display: inline-block;
	}
</style>
