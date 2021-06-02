<template>
  <div id="login-page">
    <div id="background" class="wall"></div>
    <div id="midground" class="wall"></div>
    <div id="foreground" class="wall"></div>
    <div id="top" class="wall"></div>
    <div id="ship" class="wall"></div>
    <div id="container">
      <h1>LOGIN</h1>
      <el-form ref="login-form" :model="model" :rules="rules" label-width="80px">
        <el-form-item label="用户名: " prop="username">
          <el-input v-model="model.username" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码: " prop="upwd">
          <el-input v-model="model.upwd" show-password clearable></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        upwd: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        upwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
#login-page {
  width: 100%;
  height: 100%;
  // 背景动图部分 - 开始
  .wall {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  div#background {
    background: url("../../assets/preview.jpg") no-repeat;
    background-size: cover;
  }

  div#midground {
    background: url("../../assets/midground.png");
    z-index: 1;
    animation: horizontal-drift 1000s linear infinite;
  }

  div#foreground {
    background: url("../../assets/foreground.png");
    z-index: 2;
    animation: horizontal-drift 1500s linear infinite;
  }

  div#top {
    background: url("../../assets/midground.png");
    z-index: 4;
    animation: vertical-drift 1200s linear infinite;
  }

  div#ship {
    background: url("../../assets/ship.png") no-repeat;
    background-size: 8%;
    z-index: 2;
    animation: ship-drift 36s ease-in-out infinite;
    opacity: 0.6;
  }

  @keyframes ship-drift {
    0% {
      background-position: -10% 10%;
    }
    100% {
      background-position: 110% 10%;
    }
  }

  @keyframes horizontal-drift {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: 600% 0;
    }
  }

  @keyframes vertical-drift {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: 0 600%;
    }
  }
  // 背景动图部分 - 结束
  #container {
    width: 330px;
    height: 330px;
    padding: 15px;
    position: absolute;
    top: 50%;
    margin-top: -180px;
    right: 10%;
    z-index: 5;
    box-shadow: 0px 0px 11px 0px #ccc;
    border-radius: 20px;
    h1 {
      color: #fff;
      text-align: center;
      margin-bottom: 15px;
    }
    .el-form {
      ::v-deep .el-form-item__label {
        color: #fff;
      }
    }
  }
}
</style>
