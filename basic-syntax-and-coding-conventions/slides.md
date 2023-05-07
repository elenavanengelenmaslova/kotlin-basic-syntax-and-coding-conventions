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
transition: slide-up

level: 3
---
# Kotlin source files

<v-clicks>

- Kotlin source files use the `.kt` file extension

- Key components of Kotlin source files:
  - Package declarations
  - Import statements
  - Top-level declarations

- They can contain multiple declarations, including: classes, functions and constants 
  
- Package declaration helps avoid naming conflicts and organizes code

- Import statements provide access to resources from different packages

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

---
transition: slide-left

---

```kotlin  {all|1,2|4,5|7,8|10,11|13,14|16-19|21-29}
// Package declaration
package com.example.shop

// Import statements
import com.example.util.CurrencyFormatter

// Top-level constant property
const val SALES_TAX_RATE = 0.07

// Top-level non-constant property
var shopName: String = "My Awesome Shop"

// Top-level function
fun formatPrice(price: Double): String = CurrencyFormatter.format(price)

// Top-level class
class Product(val id: Int, val name: String, val price: Double) {
    fun calculatePriceWithTax(): Double = price * (1 + SALES_TAX_RATE)
}

// Top-level object
object ProductCatalogue {
    private val products = mutableListOf<Product>()

    fun addProduct(product: Product) = products.add(product)
}
```

---
transition: slide-up

level: 3
---
# Visibility modifiers

Kotlin provides four visibility modifiers: `public`, `private`, `internal`, and `protected`:
<v-clicks>

- `public` (default) - accessible from any Kotlin file, even those in different packages

- `private` - top-level declarations are visible within the file; class/interface members are visible within the class/interface

- `internal` - accessible from any other Kotlin file within the same module

- `protected` - applicable only to class and interface members; visible within the class and its subclasses
</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

---
---
```kotlin  {all|1,2|4,5|7-10|12-15|14|17-22|19,20}
// Public (default) visibility - accessible from any Kotlin file
class Product(val id: Int, val name: String, val price: Double)

// Private visibility - accessible only within the same file
private fun calculateDiscount(price: Double, rate: Double) = price * rate

// Internal visibility - accessible within the same module
internal fun internalFunction() {
    // Accessible within the same module
}

// Protected visibility - accessible within the class and its subclasses
open class ShopUser(private val accountId: String) {
    protected fun getAccountInfo() = "Account ID: $accountId"
}

class Customer(accountId: String, val email: String) : ShopUser(accountId) {
    fun printAccountInfo() {
        // Accessible since it's a subclass of ShopUser
        println(getAccountInfo())
    }
}
```

---
transition: slide-up

level: 3
---
# Import declarations

Use import declarations to access declarations from other packages.

<v-clicks>

- Import a specific declaration with `import <fully qualified name>`

- Import multiple declarations by listing multiple import statements

- Wildcard imports with `*` to import all declarations from a package (use cautiously)

- Use `as` keyword to create an alias for naming conflicts or specific naming 

- Standard library packages are automatically imported, such as `kotlin.*`

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

---
---

```kotlin  {all|1-4,12-15|6,7,17,18|2,9,10,20,21}
// Import multiple declarations from the same package
import com.example.shop.Product
import com.example.shop.Customer
import com.example.shop.Order

// Wildcard import (use cautiously)
import com.example.shop.util.*

// Import a declaration and create an alias
import com.example.widgets.Product as WidgetProduct

// Usage of imported declarations
val product = Product(1, "Laptop", 1200.0)
val customer = Customer("John Doe", "john@example.com")
val order = Order(product, customer)

// Usage of wildcard import
val discount = calculateDiscount(product.price, 0.1)

// Usage of aliased import
val widgetProduct = WidgetProduct("Widget-01", 15.99)
```
---
transition: slide-up

level: 3
---
# Variables and Constants

<v-clicks>

- Variables and constants store and manage data 

- Variable declaration: `val` (immutable) and `var` (mutable)

- Variables used in top-level declarations, class properties, local variables, and function parameters 

- Constants: immutable values known at compile time 

- Constants declared with const keyword for primitive types and String

- Constants in class-specific companion objects 

- Non-primitive constants declared with `val` (singleton-like)

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

---
---

```kotlin  {all|1-3,12-15,26|5,6,8-10,18,19}
// Top-level constant
const val SALES_TAX_RATE = 0.07
const val DEFAULT_CURRENCY = "USD"

// Top-level variable
var shopName: String = "Gadget Store"

class Product(val id: Int, val name: String, var price: Double) {
    // Class properties
    val category: String = "Electronics"

    // Companion object with constants
    companion object {
        const val DEFAULT_DISCOUNT_RATE = 0.1
    }

    // Function using a local variable and function parameter
    fun calculateDiscountedPrice(discount: Double = DEFAULT_DISCOUNT_RATE): Double {
        val discountedPrice = price * (1 - discount)
        return discountedPrice
    }
}

// Non-primitive constant declared with val (singleton-like)
object CurrencyConverter {
    val SUPPORTED_CURRENCIES = listOf("USD", "EUR", "JPY")
}
```

---
transition: slide-left

level: 3
---
# Quiz Question 🤹

## What is the main difference between variables and constants in Kotlin?

Choose one correct answer:

<v-clicks>

**A)** Variables and constants both have the ability to change their values at runtime.

**B)** Constants are only used for String values, while variables can hold any data type.

**C)** Variables can change their values during program execution, while constants cannot.

**D)** Constants have a fixed pension plan, while variables have to deal with a fluctuating retirement fund.
<br/><br/>

**Correct answer:** C) Variables can change their values during program execution, while constants cannot.

</v-clicks>


---
transition: slide-up

level: 3
---
# Variables and Constants, continued..

<v-clicks>

- Type inference: compiler infers variable type 

- Nullability: nullable and non-nullable types 

- Basic data types: numbers, characters, booleans, strings, and arrays

- Collections: lists, sets, and maps (mutable and immutable variants)

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

---
---

```kotlin  {all|1-4|6-8|10-15|17,18,21,24|17,19,22,25}
// Type inference: String
val shopName = "Gadget Store"
// Type inference: Int
var customerAge = 30

// Nullability: nullable and non-nullable types
val discount: Double? = null // nullable variable
val productCode: String = "AB123" // non-nullable variable

// Basic data types: numbers, characters, booleans, strings, and arrays
val productId: Int = 101
val isInStock: Boolean = true
val productInitial: Char = 'L'
val productName: String = "Laptop"
val productRatings: Array<Int> = arrayOf(4, 5, 3, 4)

// Collections: lists, sets, and maps (mutable and immutable variants)
val products: List<String> = listOf("Laptop", "Mouse")
val mutableProducts: MutableList<String> = mutableListOf("Laptop", "Mouse")

val productCategories: Set<String> = setOf("Electronics", "Accessories")
val mutableProductCategories: MutableSet<String> = mutableSetOf("Electronics", "Accessories")

val productStock: Map<String, Int> = mapOf("Laptop" to 10, "Mouse" to 50)
val mutableProductStock: MutableMap<String, Int> = mutableMapOf("Laptop" to 10, "Mouse" to 50)
```

---
transition: slide-left

level: 3
---
# Functions

<v-clicks>

- Functions: modular, reusable, and maintainable code 

- Function declaration: top level, class members, nested functions 

- Nested functions: access outer function variables and parameters

- Extension functions: add new functions to existing classes 

- Lambda functions and higher-order functions: anonymous functions and functions that take/return functions

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

---
---

```kotlin  {all|1-4|6-13|15,16|15-18|15-20|22,23|22-26}
// Function declaration
fun calculateTotal(products: List<Product>): Double {
    return products.sumOf { it.price }
}

// Nested functions
fun processOrder(order: Order) {
    fun validateOrder(order: Order) = true
    fun applyDiscounts(order: Order) {
        /* Apply discounts */
    }
    if (validateOrder(order)) applyDiscounts(order)
}

// Extension function
fun List<Product>.totalPrice() = sumOf { it.price }
// Create a list of products
val products = listOf(Product("Laptop", 999.99), Product("Mouse", 29.99))
// Use the extension function to calculate the total price
val totalPrice = products.totalPrice()

// Lambda function
val discountFunction: (Double) -> Double = { price -> price * 0.9 }
//Higher-order function
fun applyDiscount(price: Double, discountCalulator: (Double) -> Double) = discountCalulator(price)
val finalPrice = applyDiscount(price = 100.0, discountCalulator = discountFunction)
```



---
transition: slide-up

level: 3
---
# Program entry point

<v-clicks>

- Entry point: `main()` function

- Top-level function: not part of any class or object 

- No return type: defaults to Unit 

- Command-line arguments (optional): `args` parameter (`Array<String>`)
</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

---
---

```kotlin  {all|10-24|11,20-23}
// Product class
data class Product(val name: String, val price: Double)

// Function to display available products
fun displayProducts(products: List<Product>) {
    println("Available products:")
    products.forEach { product -> println("${product.name}: ${product.price}") }
}

// The program entry point - the main() function
fun main(args: Array<String>) {
    val products = listOf(
        Product(name = "Laptop", price = 999.99),
        Product(name = "Mouse", price = 29.99),
        Product(name = "Keyboard", price = 49.99)
    )

    displayProducts(products)

    if (args.isNotEmpty()) {
        println("Command-line arguments:")
        args.forEach { arg -> println(arg) }
    }
}
```

---
transition: slide-left

level: 3
---
# Null safety
<v-clicks>

- Safe call operator (`?.`)
  - Safely access properties/methods of nullable types, avoiding `NullPointerException`. 
  - Result is `null` if the variable is `null`, otherwise performs the operation.
  - Example: `val customerName = customer?.name`
  
- Elvis operator (`?:`)
  - Set default value when a nullable expression is `null`. 
  - Result is the default value if the expression is `null`, otherwise evaluates to the original value.
  - Example: `val customerName = customer?.name ?: "Unknown Customer"`

</v-clicks>

---
transition: slide-up

level: 3
---
# Null safety, continued...
<v-clicks>

- NotNull operator (`!!`)
  - Forces compiler to assume nullable type is not null (use cautiously).
  - Throws `NullPointerException` at runtime if the value is actually `null`
  - Example: `val nonNullProduct = product!!`

- Safe casts (`as?`)
  - Safely cast objects to specific types, returning `null` if cast is not possible.
  - Result is `null` if the cast is not possible, otherwise evaluates to the casted object.
  - Example: `val specialProduct = product as? SpecialProduct`

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

---
---

```kotlin  {all|12-14|16,17|19-21|23,24}
fun getProductById(id: Int): Product? {
    // Return a nullable Product or null based on the id
    return null 
}

fun getCustomerById(id: Int): Customer? {
    // Return a nullable Customer or null based on the id
    return null 
}

fun main() {
    // Safe call operator
    val customer: Customer? = getCustomerById(1)
    val customerName = customer?.name

    // Elvis operator
    val customerNameOrDefault = customer?.name ?: "Unknown Customer"

    // NotNull operator
    val product: Product? = getProductById(1)
    val nonNullProduct = product!!

    // Safe casts
    val specialProduct = product as? SpecialProduct
}

```


---
transition: slide-left

level: 3
---
# Quiz Question 🤹

## What does the safe call operator (?.) do in Kotlin?

Choose one correct answer:

<v-clicks>

**A)** It throws a `NullPointerException` if the expression is `null`.

**B)** It safely calls a function on an object, returning `null` if the object is `null`.

**C)** It converts a nullable type to a non-nullable type.

**D)** It replaces `null` values with a default value.
<br/><br/>

**Correct answer:** B) It safely calls a function on an object, returning `null` if the object is `null`.

</v-clicks>

---
transition: slide-up

level: 3
---
# Control structures

<v-clicks>

- Conditional statements (`if`-`else`) - Execute code based on a condition.

- `when` expression - A powerful alternative to the `switch` statement. 

- `for` loops - Iterate over ranges, collections, or arrays.

- `while` loops - Suitable for an unknown number of iterations.

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

---
---
```kotlin  {all|4|7-12|14-16|18-23}
fun main() {
    val order = getOrderById(1)
    // Conditional statement (if-else)
    if (order.hasDiscount()) applyDiscount(order) else proceedWithoutDiscount(order)

    // When expression
    when (getProductCategory()) {
        "Electronics" -> handleElectronics()
        "Clothing" -> handleClothing()
        "Groceries" -> handleGroceries()
        else -> handleOthers()
    }

    // For loop (iterate over a list)
    val productList = getProductList()
    for (product in productList) println("Processing product: ${product.name}")

    // While loop (unknown number of iterations)
    var stock = getStock("ProductA")
    while (stock > 0) {
        sellProduct("ProductA")
        stock--
    }
}
```

---
transition: slide-left

level: 3
---
# Defining and using classes
We'll briefly cover:

<v-clicks> 

- Class declaration and object instantiation

- Primary constructors for initializing properties 

- Init blocks for executing code during instantiation 

- Secondary constructors for alternative instantiation 

- Method declarations for class behavior 

- Companion objects for "static" properties and methods

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

---
---
```kotlin  {all|1,2|3-7|9-11|13-17|19-26|2,21|9-11,22|13-17,24|25|3-7,21,25}
// Class declaration with primary constructor, secondary constructor, and init block
class Product(val name: String, val price: Double) {
    val isExpensive: Boolean

    init {
        isExpensive = price > 50
    }

    constructor(name: String) : this(name, 0.0) {
        println("Creating a product with unknown price")
    }

    // Method declaration
    fun displayDetails() {
        println("Product name: $name\nProduct price: $price")
    }
}

// Create instances and use properties/methods
fun main() {
    val productA = Product("ProductA", 49.99)
    val productB = Product("ProductB")

    productA.displayDetails()
    println("Product is expensive: ${productA.isExpensive}")
}
```

---
transition: slide-up

level: 3
---
# Annotations

<v-clicks> 

- Provide metadata for code elements

- Annotate classes, functions, properties, parameters, expressions, and file level

- Improve readability, maintainability, and functionality 

- Common use cases: serialization, validation, dependency injection, logging 

- Create custom annotations and use existing ones from libraries and frameworks

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

---
---
```kotlin  {all|1-4|10|6-11|14|13-17}
// Custom annotation for minimum price validation
@Target(AnnotationTarget.PROPERTY)
@Retention(AnnotationRetention.RUNTIME)
annotation class MinPrice(val value: Double)

//validate minimum price
data class Product(
    val id: Int,
    val name: String,
    @MinPrice(0.0) val price: Double
)

// Deprecated function example
@Deprecated("Use getProductById() instead")
fun findProductById(id: Int) {
    // ...
}
```

---
transition: slide-left

level: 3
---
# Type Inference

<v-clicks> 

- Automatically determines types of expressions and values 

- Makes code more concise and reduces type-related errors 

- Applies to variable declarations, function return types, and lambda expressions 

- Simplifies working with collections and higher-order functions 

- Increases code readability and maintainability

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

---
---

```kotlin  {all|1,2|5-10|6-13|2,6-10,16,17|6-10,20-24}
// Type inference: return type inferred to be String
fun productDescription(product: Product) = "Product: ${product.name}, Price: ${product.price}"

fun main() {
    // Type inference: List<Product>
    val products = listOf(
        Product("Phone", 299.99),
        Product("Laptop", 999.99),
        Product("Headphones", 49.99)
    )

    // Type inference: Double (expression)
    val totalPrice = products.sumOf { it.price }
    println("Total Price: $totalPrice")

    // Type inference: List<String> (collection)
    val productDescriptions = products.map(::productDescription)
    println("Product Descriptions: $productDescriptions")

    // Type inference: inferred to be (Product) -> Boolean
    val isExpensive = { product: Product -> product.price > 500 }
    
    // Type inference: List<Product> (collection with higher-order function)
    val expensiveProducts = products.filter(isExpensive)
    println("Expensive Products: $expensiveProducts")
}
```
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

```kotlin  {all|1,2,6,7,9,10|3,13,14|11}
// Abstract class with a protected, suspend function
internal abstract class ProductRepository {
  protected abstract suspend fun getProductList(): List<Product>
}

// Data class for products
internal data class Product(val id: Int, val name: String, val price: Double)

// Implementation of the ProductRepository class
internal class OnlineProductRepository : ProductRepository() {
  private lateinit var products: List<Product>
  
    // Overriding the getProductList function and make public
    public override suspend fun getProductList(): List<Product> {
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

