/*
 * 	前台应用正则验证js
 * author: Richer;
 * date:20160411;
 * copyright:dejax;
 * 
 * update By Richer 于20161011 增加新的验证方法，用户名正则对象：用户名为字母、数字或下划线组合，不支持纯数字，5-20个字符
 */

/**
 * 金额正则验证
 * 规则：1、最多支持小数点前9位
 * 		2、不允许为负数
 *		3、小数点最多为6位  
 */
function verifyMoney( value ) {
	// var parnt = /-?\d+\.\d+/;//金额正则表达式
	//var parnt = /^([1-9][\d]{0,8}|0)(\.[\d]{1,6})?$/;
	if (REGEXP_MONEY.exec(value) || $.trim(value) == '') {
		return true;
	} else {
		return false;
	}
}

/**
 * 手机电话正则验证
 * 规则：11位数字，以1开头。
 */
function  verifyMobile( value ) {
   //var parnt = /^1\d{10}$/;
   //var parnt = /^((\+?86)|(\(\+86\)))?1\d{10}$/;
   if (REGEXP_MOBILE.exec( $.trim( value ) ) ) {
		return true;
	} else {
		return false;
	}
}
/**
 * 座机电话正则验证
 * 规则：验证规则：区号+号码，区号以0开头，3位或4位号码由7位或8位数字组成区号与号码之间可以无连接符，也可以“-”连接
 */
function verifyPhone(value){
   //var parnt = /^0\d{2,3}-?\d{7,8}$/;
   //if ( parnt.exec(value) ) {
   if (REGEXP_TEL.test( $.trim( value ) ) ) {
		return true;
	} else {
		return false;
	}
}

/**
 * 邮箱正则验证
 * 验证邮箱验证规则：
 * 邮箱地址分成“第一部分@第二部分”
 * 1、第一部分：由字母、数字、下划线、短线“-”、点号“.”组成
 * 2、第二部分：为一个域名，域名由字母、数字、短线“-”、域名后缀组成，而域名后缀一般为.xxx或.xxx.xx，一区的域名后缀一般为2-4位，如cn,com,net，现在域名有的也会大于4位
 */
function verifyEmail(value){
	//var parnt = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
	//var parnt = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	//var parnt = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   //if ( parnt.exec(value) ) {
	if (REGEXP_EMAIL.test( $.trim( value ) ) ) {
		return true;
	} else {
		return false;
	}
}

/**
 * 企业组织机构代码正则验证
 * 企业组织机构代码验证规则:
 * 1、组织机构代码：全国组织机构代码由八位数字（或大写拉丁字母）本体代码和一位数字（或大写拉丁字母）校验码组成。
 * 2、社会信用代码：标准规定统一社会信用代码用18位阿拉伯数字或大写英文字母表示
 */
function verifyOrgancode( value){
	//var parnt = /(^[0-9A-Z]{9}$)|(^[0-9A-Z]{18}$)/; 
   //if ( parnt.exec(value) ) {
	if ( REGEXP_ORGANCODE.test( $.trim( value ) ) ) {
		return true;
	} else {
		return false;
	}
}

/**
 * 密码正则验证
 * 密码验证规则：
 * 1、长度必须大于8个字符
 * 2、必须至少有一个数字和字母
 */
//var parntPassword = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,}$/;
function verifyPassword( value){
   //if ( parnt.exec(value) ) {
	if ( REGEXP_PASSWORD.test( $.trim( value ) ) ) {
		return true;
	} else {
		return false;
	}
}

/**
 * 身份证号码验证
 */
function verifyIDCard( value){
   //if ( parnt.exec(value) ) {
	if ( REGEXP_IDCARD.test( $.trim( value ) ) ) {
		return true;
	} else {
		return false;
	}
}

/**
 * 登录帐号验证
 */
function verifyLoginAccount( value ){
   //if ( parnt.exec(value) ) {
	if ( REGEXP_LOGINACCOUNT.test( $.trim( value ) ) ) {
		return true;
	} else {
		return false;
	}
}


