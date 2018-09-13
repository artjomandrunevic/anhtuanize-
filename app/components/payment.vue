<template>

    <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
        <div data-uk-margin>
            <h2 class="uk-margin-remove">{{ 'Payment' | trans }}</h2>
        </div>
        <div data-uk-margin>
            <button class="uk-button uk-button-primary" type="submit">{{ 'Save' | trans }}</button>
        </div>
    </div>

    <div class="uk-form uk-form-horizontal">
        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Logo Off-canvas' | trans }}</label>
            <div class="uk-form-controls uk-form-width-large">
                <input v-model="config.atn"></input-image>
                <p class="uk-form-help-block">{{ 'Select an optional logo for the off-canvas menu. for ATN' | trans }}</p>
            </div>
        </div>
    </div>

</template>

<script>

    module.exports = {

        section: {
            label: 'Payment',
            icon: 'pk-icon-large-credit-card',
            priority: 15
        },

        data: function () {
            return _.extend({config: {}}, window.$payment);
        },

        events: {

            save: function() {

                this.$http.post('admin/system/settings/config', {name: this.name, config: this.config}).catch(function (res) {
                    this.$notify(res.data, 'danger');
                });

            }

        }

    };

    window.Site.components['payment'] = module.exports;

</script>
