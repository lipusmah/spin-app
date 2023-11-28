<script lang="ts">
    import { locationFeatures } from "../stores/data";

    const features = $locationFeatures.toSorted((a, b) => {
        let val =
            new Date(b.getProperties()["nastanekCas"]).getTime() -
            new Date(a.getProperties()["nastanekCas"]).getTime();
        console.log(val);
        return val;
    });
</script>

<div>
    {#each features as feature}
        <div class="list-item">
            <div class="card">
                <div class="time">
                    <div>Čas prijave:</div>
                    <div>
                        {new Date(
                            feature.getProperties()["prijavaCas"],
                        ).toLocaleString("sl", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </div>
                </div>
                <div class="title">
                    {feature.getProperties()["dogodekNaziv"]}
                </div>
                <div class="type">
                    {feature.getProperties()["intervencijskaVrstaNaziv"]}
                </div>

                <div class="municipality">
                    {feature.getProperties()["obcinaNaziv"]}
                </div>

                <div class="description">
                    {feature.getProperties()["besedilo"]}
                </div>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    .time{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        :last-child{
            font-weight: bold;
        }
    }
</style>