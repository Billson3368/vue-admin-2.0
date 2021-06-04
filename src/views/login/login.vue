<template>
  <div id="login-page">
    <div id="background" class="wall"></div>
    <div id="midground" class="wall"></div>
    <div id="foreground" class="wall"></div>
    <div id="top" class="wall"></div>
    <div id="ship" class="wall"></div>
    <div id="container">
      <img :src="logo" id="entrance" :class="{'animated': entranceStatus}" @click="showLoginForm" alt="entrance" />
      <div class="wrapper" :class="{'animated': entranceStatus}">
        <h1 id="logo">
          <img :src="logo" @click="hideLoginForm" alt="logo" />&nbsp;
          <i class="iconfont icon-letter-l"></i>
          <i class="iconfont icon-letter-o"></i>
          <i class="iconfont icon-letter-g"></i>
          <i class="iconfont icon-letter-i"></i>
          <i class="iconfont icon-letter-n"></i>
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
            <el-button type="plain" @click="login">To The Moon!</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo.png";
export default {
  data() {
    return {
      logo,
      entranceStatus: false,
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
    showLoginForm() {
      this.entranceStatus = true;
    },
    hideLoginForm() {
      this.entranceStatus = false;
    },
    login() {
      console.log(this.model.username, this.model.upwd);
    },
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
    width: 360px;
    height: 360px;
    position: absolute;
    top: 50%;
    margin-top: -180px;
    right: 15%;
    z-index: 5;
    // &:hover {
    //   opacity: 1;
    // }
    #entrance {
      width: 36px;
      z-index: 6;
      position: absolute;
      top: 23px;
      left: 48px;
      transform: rotate(45deg) scale(4);
      transition: all 1s;
      filter: grayscale(1);
      &:hover {
        transform: rotate(36000deg) scale(4);
        transition: all 60s ease;
      }
      &.animated {
        opacity: 0;
        z-index: -9999;
        transform: rotate(90045deg) scale(1);
      }
    }
    .wrapper {
      width: 100%;
      height: 100%;
      padding: 15px;
      border-radius: 20px;
      opacity: 0;
      box-shadow: 0px 0px 11px 0px #ccc;
      transition: opacity 3.3s;
      &.animated {
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
          width: 100%;
          margin-top: 34px;
          font-size: 16px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 11px 20px;
        }
      }
    }
  }
}
</style>
