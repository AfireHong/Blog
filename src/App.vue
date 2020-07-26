<template>
    <router-view/>
</template>

<style>
body{
  background: rgba(47, 54, 64, 0.9);
  color: #fafafa;
}
*{
  margin: 0;
  padding: 0;
  font-family:"PingFang SC", "Microsoft YaHei", sans-serif;
  box-sizing: border-box;
}
header{
  max-width: 100vw;
  max-width: 100vw;
  height: 100vh;
}

::selection{
    background: rgb(230,230,230);
    color:black;
}
/* ScrollBar */
::-webkit-scrollbar {
	width: 6px;
	/* height: 5px; */
}
::-webkit-scrollbar-button {
	display: none;
}
::-webkit-scrollbar-thumb {
	background: rgb(120,120,120);
	border-radius: 2px;
	transition: .2s;
}
::-webkit-scrollbar-thumb:hover {
	background: rgb(100,100,100)
}
/* Selection */
::-moz-selection,
::-webkit-selection,
::selection {
	background-color: #f1f1f1
}
</style>
