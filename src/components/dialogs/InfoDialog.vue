<template>
  <v-dialog
    :value="true"
    @input="closeDialog"
    :width="dialogWidth"
    scrollable
    :fullscreen="phoneLayout"
  >
    <!-- <div class="info-dialog"> -->
    <v-card class="torrent-info-card">
      <v-card-title class="headline">
        <v-icon class="mr-2">
          mdi-alert-circle
        </v-icon>
        <span v-text="$t('info')" />
      </v-card-title>
      <v-card-text>
        <v-tabs v-model="tabSync">
          <v-tab href="#general">
            {{ $t("prop_tab_bar.general") }}
          </v-tab>
          <v-tab href="#trackers">
            {{ $t("prop_tab_bar.trackers") }}
          </v-tab>
          <v-tab href="#peers">
            {{ $t("prop_tab_bar.peers") }}
          </v-tab>
          <v-tab href="#content">
            {{ $t("prop_tab_bar.content") }}
          </v-tab>
        </v-tabs>
        <v-tabs-items
          :value="tab"
          touchless
        >
          <v-tab-item
            class="torrent-info-tab-item"
            value="general"
          >
            <panel
              v-for="torrent in torrents"
              :key="torrent.hash"
              :title="torrent.name"
              :single="torrents.length === 1"
            >
              <torrent-info
                :torrent="torrent"
                :is-active="tab === 'general'"
              />
            </panel>
          </v-tab-item>
          <v-tab-item
            class="torrent-info-tab-item"
            value="trackers"
          >
            <panel
              v-for="torrent in torrents"
              :key="torrent.hash"
              :title="torrent.name"
              :single="torrents.length === 1"
            >
              <trackers
                :hash="torrent.hash"
                :is-active="tab === 'trackers'"
              />
            </panel>
          </v-tab-item>
          <v-tab-item
            class="torrent-info-tab-item"
            value="peers"
          >
            <panel
              v-for="torrent in torrents"
              :key="torrent.hash"
              :title="torrent.name"
              :single="torrents.length === 1"
            >
              <peers
                :hash="torrent.hash"
                :is-active="tab === 'peers'"
              />
            </panel>
          </v-tab-item>
          <v-tab-item
            class="torrent-info-tab-item"
            value="content"
          >
            <panel
              v-for="torrent in torrents"
              :key="torrent.hash"
              :title="torrent.name"
              :single="torrents.length === 1"
            >
              <torrent-content
                :hash="torrent.hash"
                :is-active="tab === 'content'"
              />
            </panel>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          text
          @click="closeDialog"
          v-text="$t('close')"
        />
      </v-card-actions>
    </v-card>
    <!-- </div> -->
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import TorrentInfo from './TorrentInfo.vue';
import TorrentContent from './TorrentContent.vue';
import Trackers from './Trackers.vue';
import Peers from './Peers.vue';
import Panel from './Panel.vue';
import Component from 'vue-class-component';
import { Prop, Emit, PropSync } from 'vue-property-decorator';
import { Torrent } from '../../types';

@Component({
  components: {
    TorrentInfo,
    TorrentContent,
    Trackers,
    Peers,
    Panel,
  },
})
export default class InfoDialog extends Vue {
  @Prop(Array)
  readonly value!: Torrent[]

  @PropSync('tab', String)
  tabSync!: string

  torrents!: Torrent[]

  created() {
    this.torrents = this.value
  }

  get phoneLayout() {
    return this.$vuetify.breakpoint.xsOnly;
  }
  get dialogWidth() {
    return this.phoneLayout ? '100%' : '80%';
  }

  get dialogHeight() {
    return "80%";
  }

  @Emit('input')
  closeDialog() {
    return false
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles.scss';

@include dialog-title;

::v-deep .v-dialog {
  max-width: 1100px;

  .v-card__text {
    min-height: 200px;
    padding: 0 8px 8px;
  }
}

::v-deep .v-data-table thead th,
::v-deep .v-data-table tbody td {
  padding: 0 2px !important;
  height: auto;

  white-space: nowrap;

  &:first-child {
    padding: 0 0 0 8px !important;
  }

  &:last-child {
    padding-right: 8px !important;
  }
}

.v-dialog--fullscreen {
  .v-card__text {
    padding-bottom: 52px;
  }

  .v-card__actions {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

::v-deep .v-dialog__content {
  background-color: red;
  flex-direction: column;
}

::v-deep .v-dialog {
  flex: 1;
  height: 100%;
  align-items: center;
  flex-direction: column;
}

.torrent-info-tab-item {
  display: flex;
  flex-direction: column;
}

.torrent-info-card ::v-deep .v-card__text {
  display: flex;
  flex-direction: column;
}

.torrent-info-card ::v-deep .v-tabs {
  flex: 0;
}

.torrent-info-card ::v-deep .v-window {
  display: flex;
  flex-direction: column;

  & .v-window__container {
    min-height: 0;

    & .v-window-item {
      min-height: 0;

      & .inner {
        min-height: 0;
        display: flex;
        overflow-x: auto;
        flex-direction: column;
      }
    }
  }
}

::v-deep .torrent-info-table {
  display: flex;
  min-height: 0;
  flex-direction: column;
}
</style>
