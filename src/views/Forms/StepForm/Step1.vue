<template>
  <div>
    <a-form layout="horizontal" :form="form" style="width:500px;margin: 0 auto">
      <a-form-item
        label="姓名"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input
          v-decorator="[
            'payAccount',
            {
              initialValue: step.payAccount,
              rules: [{ required: true, message: '帐号不能为空' }]
            }
          ]"
          placeholder="input placeholder"
        />
      </a-form-item>
      <a-form-item :wrapper-col="formItemLayout.wrapperCol">
        <a-button type="primary" @click="handleSubmit">
          下一步
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    };
  },
  computed: {
    step() {
      return this.$store.state.form.step;
    }
  },
  methods: {
    handleSubmit() {
      const { form, $store, $router } = this;
      form.validateFields((err, values) => {
        if (!err) {
          $store.commit({
            type: "form/saveStepFormData",
            payload: values
          });
          $router.push("/form/step-form/confirm");
        }
      });
    }
  }
};
</script>
<style scoped></style>
