---
theme: seriph
background: https://images.unsplash.com/photo-1588864721034-4afdb05a5799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## Kotlin Syntax and Basic Coding Conventions
  Presentation slides for Kotlin newbies by Elena van Engelen - Maslova.

# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
---

# Kotlin Syntax and Basic Coding Conventions

Bite size kotlin session 1

<div class="pt-12">
    Elena van Engelen - Maslova
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/elenavanengelenmaslova/kotlin-bite-size-crush-course" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: slide-left
---

# Format

Overview of Kotlin syntax and basic coding conventions, focusing on breadth rather than depth.
<v-clicks>

- 📝 **Syntax Overview** - introduction to essentials of the language

- 🛠 **Coding Conventions** - write readable and maintainable Kotlin code

- 🧑‍💻 **Beginner Friendly** - no previous OO or Java knowledge needed

- 🤹 **Quizzes** - we are going to do some small quizzes

- 🍕 **Bite Size** - short session
</v-clicks>


<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---
layout: default
---

# Table of contents

<Toc minDepth="2" maxDepth="2"></Toc>

---
transition: slide-left

level: 2
---
# Introdu<logos-kotlin-icon />tion   

<v-clicks>

- Koltin is a multi-platform versatile language (JVM, NodeJS, Native, Common)

- Supports procedural, object-oriented and functional programming

- Concise and expressive syntax

- Enhanced safety features

- First-class Functional programming support

- Coroutines (light-weight concurrency)

</v-clicks>

---
transition: slide-left
layout: section

level: 2
---
# Kotlin Syntax Overview

---
transition: slide-left

level: 3
---
# Kotlin source files

---
transition: slide-left

level: 3
---
# Visibility modifiers

---
transition: slide-left

level: 3
---
# Package definition

---
transition: slide-left

level: 3
---
# Import declarations

---
transition: slide-left

level: 3
---
# Variables and Constants

<!-- 
Quiz: Difference between variables and constants 
-->

---
transition: slide-left

level: 3
---
# Functions

---
transition: slide-left

level: 3
---
# Program entry point

---
transition: slide-left

level: 3
---
# Null safety

<!--
Quiz: How does Kotlin handle null safety?
-->

---
transition: slide-left

level: 3
---
# Control structures


---
transition: slide-left

level: 3
---
# Defining and using classes

---
transition: slide-left

level: 3
---
# Annotations

---
transition: slide-left

level: 3
---
# Type Inference

---
transition: slide-left

level: 2
---
# Naming Conventions and Code Organization

---
transition: slide-up

level: 3
---

# Modifiers

For full order list go to [modifiers order](https://kotlinlang.org/docs/coding-conventions.html#modifiers-order)
|                                                                           |                                                                                                                                              |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| <kbd>public</kbd>/<kbd>protected</kbd>/<kbd>internal</kbd>/<kbd>private</kbd> | Visibility modifiers that control the accessibility of classes, objects, interfaces, constructors, functions, properties, and their setters. |
| <kbd>final</kbd>/<kbd>open</kbd>/<kbd>abstract</kbd>/<kbd>sealed</kbd>/<kbd>const</kbd>                                                       | Modifiers that control inheritance and the mutability of properties.                                                                         |
| <kbd>override</kbd>                                                         | Indicates that a member in a subclass is intended to override a member in the superclass                                                     |
| <kbd>lateinit</kbd>                                         | Used to initialize a non-null property later, after the object's constructor has been called
| <kbd>data</kbd>/<kbd>enum</kbd>/<kbd>annotation</kbd>/<kbd>fun</kbd>                                          | Modifiers for special classes: data classes, enumerations, annotations, and functional interfaces (fun interface)                            |
<!-- https://sli.dev/guide/animations.html#click-animations -->
<img
  v-click
  class="absolute -bottom-15 -left-0 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

---
---

# Order of modifiers

```kotlin  {all|2,7,10|3,14|11}
// Abstract class with a protected, suspend function
internal abstract class ProductRepository {
  protected abstract suspend fun getProductList(): List<Product>
}

// Data class for products
internal data class Product(val id: Int, val name: String, val price: Double)

// Implementation of the ProductRepository class
internal class OnlineProductRepository : ProductRepository() {
  private lateinit var products: List<Product>
  
    // Overriding the getProductList function
    override suspend fun getProductList(): List<Product> {
      if (!::products.isInitialized) {
        // get products from products repository
      }
      return products
    }
}
```
<!--
https://sli.dev/guide/syntax.html#line-highlighting
-->

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---
transition: slide-left

level: 2
---
# Comments and Documentation


---
transition: slide-left

level: 2
---
# Summary


---
layout: end
---

