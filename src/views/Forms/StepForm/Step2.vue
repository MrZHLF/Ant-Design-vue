<template>
  <div>
    <a-form layout="horizontal" :form="form" style="width:500px;margin: 0 auto">
      <a-form-item
        label="付款账号"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        {{ step.payAccount }}
      </a-form-item>
      <a-form-item
        label="密码"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input
          v-decorator="[
            'password',
            {
              initialValue: step.payAccount,
              rules: [{ required: true, message: '帐号不能为空' }]
            }
          ]"
          placeholder="请输入密码"
          type="password"
        />
      </a-form-item>
      <a-form-item :wrapper-col="formItemLayout.wrapperCol">
        <a-button type="primary" @click="handleSubmit">
          提交
        </a-button>
        <a-button @click="$router.go(-1)">上一步</a-button>
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
      },
      payAccount: ""
    };
  },
  computed: {
    step() {
      return this.$store.state.form.step;
    }
  },
  methods: {
    handleSubmit() {
      const { form, $store, step } = this;
      form.validateFields((err, values) => {
        if (!err) {
          $store.dispatch({
            type: "form/submitStepForm",
            payload: { ...step, ...values }
          });
        }
      });
    }
  }
};
</script>
<style scoped></style>
