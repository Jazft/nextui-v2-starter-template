<script>
export default {
  data() {
    return {
      inputValue: '',
      inputTitle: ''
    };
  }
};
</script>

<template>
  <article>
    <section id="cardInformation">
      <small>Website URL</small>
      <input type="text" v-model="inputValue">
      <small>Title</small>
      <input type="text" v-model="inputTitle">
    </section>
    <section id="cardPreview">
      <small id="cardDataTitle">
        {{ inputValue || "www.google.com" }}
      </small>
      <h4> {{ inputTitle || "Type a title here!" }}</h4>
      <p>Tyme some awesome description here!</p>
    </section>
  </article>
</template>

<style>
article {
  display: flex;
  flex-direction: row;
  gap: 25px;
}

section {
  background: #f5f5f5;
  padding: 1.5rem 1.5rem;
  border-radius: 10.5px;
  border: solid #ccc 1px;
  width: 15rem;
  overflow: hidden;
}

#cardInformation {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

#cardInformation small {
  font-weight: 600;
  font-size: 1rem;
  color: #c0c0c0;
}

#cardInformation input {
  width: 80%;
  border: 1px solid #ccc;
  background: #eee;
  border-radius: 6.5px;
  padding: 0.55rem 0.9rem;
  transition: all 1s;
  color: #808080;
}

input:focus {
  outline: none;
}

p {
  color: #555555;
  font-size: 15px;
}

input {
  margin-bottom: 0.5rem;
}

#cardPreview {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

#cardDataTitle {
  color: #535353;
}

h4 {
  color: #4338be;
}
</style>