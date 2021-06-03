<template>
  <div id="login-page">
    <div id="background" class="wall"></div>
    <div id="midground" class="wall"></div>
    <div id="foreground" class="wall"></div>
    <div id="top" class="wall"></div>
    <div id="ship" class="wall"></div>
    <div id="container">
      <h1 id="logo">
        <i class="iconfont icon-L_square_solid"></i>
        <img :src="logo" alt="logo" />
        <i class="iconfont icon-G_square_solid"></i>
        <i class="iconfont icon-I_square_solid"></i>
        <i class="iconfont icon-N_square_solid"></i>
      </h1>
      <el-form ref="login-form" :model="model" :rules="rules">
        <el-form-item prop="username">
          <el-input
            v-model="model.username"
            placeholder="请输入用户名"
            clearable
          >
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="upwd">
          <el-input
            v-model="model.upwd"
            placeholder="请输入密码"
            @keyup.enter.native="login"
            show-password
            clearable
          >
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="plain" @click="login">登&nbsp;&nbsp;录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo.png";
export default {
  data() {
    return {
      logo,
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
  methods: {
    login() {
      console.log(this.model.username, this.model.upwd);
    }
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
  @keyframes rotate-fast {
    0% {
      opacity: 0.75;
      filter: grayscale(1);
      transform: rotate(0);
    }
    50% {
      opacity: 0.5;
      filter: grayscale(0);
      transform: rotate(90000deg);
    }
    100% {
      opacity: 0.75;
      filter: grayscale(1);
      transform: rotate(18000deg);
    }
  }
  // 背景动图部分 - 结束
  #container {
    width: 330px;
    height: 330px;
    padding: 15px;
    opacity: 0.1;
    position: absolute;
    top: 50%;
    margin-top: -180px;
    right: 15%;
    z-index: 5;
    box-shadow: 0px 0px 11px 0px #ccc;
    border-radius: 20px;
    transition: opacity 3.3s;
    &:hover {
      opacity: 1;
    }
    #logo {
      margin-bottom: 30px;
      text-align: center;
      color: #fff;
      height: 48px;
      .iconfont {
        font-size: 48px;
      }
      img {
        width: 36px;
        animation: rotate-fast 60s linear infinite;
      }
    }
    .el-form {
      padding: 20px;
      ::v-deep .el-form-item__label {
        color: #fff;
      }
      ::v-deep .el-input__icon {
        font-size: 18px;
      }
      .el-button {
        margin-top: 15px;
        width: 100%;
      }
    }
  }
}
</style>
