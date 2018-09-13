<template>

    <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin="data-uk-margin">
        <div data-uk-margin="data-uk-margin">
            <h2 class="uk-margin-remove">{{ 'Social Media' | trans }}</h2>
        </div>
        <div data-uk-margin="data-uk-margin">
            <button class="uk-button uk-button-primary" type="submit">{{ 'Save' | trans }}</button>
        </div>
    </div>

    <div class="uk-form uk-form-horizontal">
        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Facebook' | trans }}</label>
            <div class="uk-form-controls uk-form-width-large">
                <input v-model="config.social_media.facebook" placeholder="facebook"></input>
                <p class="uk-form-help-block">{{ 'Social media links' | trans }}</p>
            </div>
        </div>
        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Youtube' | trans }}</label>
            <div class="uk-form-controls uk-form-width-large">
                <input v-model="config.social_media.youtube" placeholder="Youtube"></input>
                <p class="uk-form-help-block">{{ 'Social media links' | trans }}</p>
            </div>
        </div>
        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Instagram' | trans }}</label>
            <div class="uk-form-controls uk-form-width-large">
                <input v-model="config.social_media.instagram" placeholder="Instagram"></input>
                <p class="uk-form-help-block">{{ 'Social media links' | trans }}</p>
            </div>
        </div>
        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Twitter' | trans }}</label>
            <div class="uk-form-controls uk-form-width-large">
                <input v-model="config.social_media.twitter" placeholder="Twitter"></input>
                <p class="uk-form-help-block">{{ 'Social media links' | trans }}</p>
            </div>
        </div>
    </div>

</template>

<script>

    module.exports = {

        section: {
            label: 'Social Media',
            icon: 'pk-icon-large-social',
            priority: 15
        },

        data: function () {
            return _.extend({
                config: {}
            }, window.$social_media);
        },

        events: {

            save: function () {

                this.$http.post('admin/system/settings/config', {
                    name: this.name,
                    config: this.config
                }).catch(function (res) {
                    this.$notify(res.data, 'danger');
                });

            }

        }

    };

    window.Site.components['social_media'] = module.exports;
</script>
