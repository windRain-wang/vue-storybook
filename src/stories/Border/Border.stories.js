import Border from "./Border.vue";

export default {
  title: "Border",
  component: Border,
  decorators: [
    () => ({ template: '<div class="bg-gray-500 p-20"><story /></div>' }),
  ],
};

export const Default = () => ({
  components: { Border },
  template: "<Border />",
});
