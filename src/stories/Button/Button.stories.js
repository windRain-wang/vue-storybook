import Button from "./Button.vue";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => ({
  components: { Button },
  template: "<Button />",
});

export const Primary = () => ({
  components: { Button },
  template: "<Button type='primary' />",
});
