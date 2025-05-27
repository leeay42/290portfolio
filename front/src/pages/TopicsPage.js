import React from "react";

function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>

            <nav class="local">
                <a href="#webservers">Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#images">Optimized Images</a>
                <a href="#favicon">Favicons</a>
                <a href="#css">CSS</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#js">JavaScript</a>
            </nav>

            <article id="webservers">
                <h3>Web Servers</h3>
                <p>In general, the term <strong>index</strong> refers to the <strong>designated homepage</strong> of the web 
                    application or to the file or resource at the end of the path that is 
                    requested from a web server.  The file index.html is located in the 
                    <strong>root directory</strong>, and when there is a <strong>GET request</strong>, the web application 
                    returns this file as the homepage.  The OSU Engineering web server 
                    utilizes Apache software, which uses “index” as the default name, but 
                    other servers can use other names (such as default.html) or file types 
                    (such as index.js).</p>

                <p>In the browser's <strong>Web Dev/Inspector</strong> tools, when looking at the file’s 
                    details on the web server under the <strong>Network</strong> tab, the requested URL 
                    is the location of the file on the remote server.  It also has a remote address that looks like 
                    an <strong>IP address</strong>.  When looking at the file’s details on the local computer, 
                    the requested URL is the path to the file on the local machine, and there 
                    is no remote address needed.  The favicon is automatically provided by the 
                    OSU web server but does not exist on the local machine.  Locally, the main.css 
                    and main.js files have a “failed” status, while on the web server they have 
                    status 404.  For both, the index.html file has status 200 and shows that the request method is 
                    GET.  Looking at the <strong>HTTP request</strong>, while the remote server shows the 
                    <strong>request line</strong> and various <strong>request headers</strong>, the local file shows a warning
                    “Provisional headers are shown” and only a few request headers.  For the <strong>HTTP 
                    response</strong>, the remote server shows the <strong>status line</strong> and various 
                    <strong>response headers</strong>, while the remote file only shows 2 response headers for
                    content type and date modified.</p>

                <p>The main.css and main.js files have status 404 or not found because 
                    the files have not been created and are not generated automatically by 
                    the server.  This can also occur if the given file path is incorrect.  
                    The favicon.ico file has status 200 because the OSU server provides it 
                    automatically.</p>

                <p>The <strong>URL</strong> is https://web.engr.oregonstate.edu/~leeah/a1-leeah/index.html.  
                    The <strong>scheme</strong> is HTTPS, which is an encrypted HTTP protocol.  
                    The <strong>host domain/server</strong> is oregonstate.edu and the <strong>subdomains</strong> 
                    are web and engr.  The <strong>path to the resource</strong> is ~leeah/a1-leeah/index.html 
                    and the HTML file will be executed to generate content.  
                    Since the resource is named index.html, the web server will automatically launch 
                    the file as the homepage when given ~leeah/a1-leeah/.</p>
            </article>

            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>Overall, <strong>frontend design</strong> refers to combining the elements of 
                    visual graphics and user-product interaction to generate the best suited user 
                    experience.  This includes things such as the color scheme, navigation systems,
                    graphical user interface (GUI), and general user experience.
                    <strong>Usability</strong> is a measure that evaluates the user's ease of use and 
                    satisfaction when completing their task with a product.  Usability is important
                    for user retention, or for organizations, worker productivity.
                    Design styles change often, so the designer should research current trends to 
                    keep the look and feel modern.</p>

                <p>There is a list of <strong>Five “E”s</strong> that define a usable website:</p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>Users can achieve their goal(s) with accurate results.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>Tasks are performed quickly with a minimum number of steps.</dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>New users can intuitively use the product and obtain results, while returning 
                        users can easily recollect the steps.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>There are no accessibility or availability issues that can interfere with a 
                        user's objective</dd>
                    <dt><strong>Enjoyable</strong> to use or <strong>engaging</strong></dt>
                    <dd>The content and design suit the unique needs of the intended audience, and the
                        overall experience is optimized for user retention.</dd>
                </dl>

                <p>Page layout tags are <strong>block-level</strong> elements that section off content usually
                    as a block with a <strong>newline</strong> between each section on the browser.  These blocks
                    help machines like screen readers or search engines understand where parts of the page
                    are located.  The <strong>header</strong> element defines the header or masthead of a document.
                    The <strong>nav</strong> element denotes a set of navigation links.  The <strong>main</strong>
                    element encompasses the main content of the page.  The <strong>section</strong> element
                    defines content with similar themes, while the <strong>article</strong> has specific, independent
                    content.  The <strong>aside</strong> and <strong>figure</strong> elements has content that floats 
                    to the right or left of the page for things like sidebars or images.  The <strong>footer</strong> 
                    element denotes footer information at the end of the page.  The <strong>div</strong> element 
                    is used for dynamic content.</p>

                <p>The <strong>anchor</strong> element is used to create hyperlinks to different types of 
                    content.  The href attribute in the opening tag is used to specify the path/URL of the 
                    destination when clicked.  The description of the link is between the opening and closing 
                    tags.  These are the different types that anchors can link:</p>
                <ol>
                    <li><strong>External content</strong> is a resource outside the current website audience 
                        is linked by specifying the <strong>absolute</strong> path or complete URL to the 
                        resource in the href attribute.</li>
                    <li><strong>Internal content</strong> is specific material within the same page.  By using 
                        the <strong>ID</strong> attribute in a tag, the anchor element can use the ID value with 
                        a hashtag as a reference to the location in its href attribute.</li>
                    <li><strong>Page-to-page</strong> refers to a page within the same website as the current
                        page.  The <strong>relative</strong> path is referenced in the href attribute.  A relative 
                        path is the location relative to where the URL is used.  It can be in the same directory, 
                        the <strong>parent</strong> directory (moving up the directory tree) or <strong>child</strong> 
                        directory (moving down the directory tree).</li>
                </ol>
            </article>

            <article id="images">
                <h3>Optimized Images</h3>
                <p>There are six major specifications for web images.  First, the <strong>file name</strong> should
                    be descriptive and concise to enhance <strong>search engine optimization (SEO)</strong> so 
                    users can find related images. Second, the <strong>file size</strong> should be compressed as much 
                    as possible to conserve storage space and maintain fast page loading times. Image compression 
                    can be <strong>Lossy</strong> or <strong>Lossless</strong>. Third, images should 
                    be <strong>cropped to fit</strong> the dimensions of the webpage.  An overly large image (like a 
                    8000px wide image in a 600px block) will adversely impact loading time.  Fourth, the correct
                    <strong>file format</strong> is necessary because each type has different qualities that are 
                    advantageous depending on the task. For instance, some (like JPG files) are good for compression, 
                    which is good for photos.  Next, the <strong>image resolution</strong> should be reduced as much 
                    as possible to suit the monitor resolution.  Images for a monitor that renders at 72 <strong>
                    pixels per inch</strong> (ppi) should be used at 72ppi to save space and time.  Monitors can render 
                    from 72ppi to 300+ppi and as technology improves, providing multiple image sizes is becoming the norm.
                    Lastly, the <strong>color mode(s)</strong> should be chosen to optimize the image across different 
                    platforms and materials consistently, as it affects file size and color detail. Commonly used color 
                    modes by developers are <strong>HTML Color Names</strong>, <strong>Hexadecimal/Hexa</strong>, 
                    <strong>RGB/RGBa</strong>, <strong>Indexed Color</strong>, and <strong>HSL/HSLa</strong>.  For example, 
                    it is common to use Indexed Color for GIF files and RGB format for PNG, JPG, SVG, and WebP files. </p>
               
                <p>For web photos, the most appropriate file formats are <strong>.JPG</strong> and 
                    <strong>WebP</strong>.  JPG files can maintain great image quality even when compressed 
                    down to small file sizes.  WebP files can also maintain great image quality at small
                    image sizes.  It can compress better than JPG files for the same quality and can have
                    transparent backgrounds using the alpha channel.  For line art images, the best file 
                    formats to use are <strong>.GIF</strong>, <strong>.PNG</strong>, and <strong>.SVG</strong>.
                    GIF images can support 8-bit transparency and animation, and it's common to see GIF files used in 
                    short animation/video clips.  The edges are matted (by anti-aliasing) to a specified background color
                    PNG files have alpha channel transparency and a wide range of color depths.  Placing over images with
                    various colors does not distort the picture.  SVG (Scalable Vector Graphics) is a vector file format 
                    written in XML format that supports two-dimensional, interactive, and animated images across 
                    many devices and platforms in a resolution-independent manner.</p>
            </article>

            <article id="favicon">
                <h3>Favicons</h3>
                <p><strong>Favicons</strong> are small icons used to quickly identify specific sites or applications.  
                    A logo that represents the website, app, or company is altered and saved in multiple file formats
                    so that the image will work on different browsers and machines.  Common file formats for favicons are 
                    GIF, PNG, ICO, and SVG. With advancing technology, standards for favicons change.  For instance, 
                    the ICO format is used for older browsers, while the PNG and SVG formats are currently the most popular.
                    Browsers and devices take the modified image files and anchor them to programmed locations such as bookmark lists,
                    browser tabs, device screens, and search engine results list.</p>
            </article>

            <article id="css">
                <h3>Cascading Style Sheets (CSS)</h3>
                <p>With its own syntax, <strong>Cascading Style Sheets</strong> (CSS) can redefine the style of the basic 
                    structure and content organization produced by HTML <strong>semantic</strong> markup and 
                    the dynamic elements constructed by JavaScript.  Global changes can be made easily to all linked 
                    pages automatically to save time and effort.  For instance, CSS can override the default font, 
                    Times New Roman, of the HTML body element by adding a new font to its stylesheet. CSS is used to 
                    manipulate default HTML elements and JavaScript components so that the end product is easy to
                     use and comprehend, and conforms to brand requirements.</p>

                <p>The first way to incorporate styles is through <strong>external CSS</strong> file(s).  An external 
                    stylesheet can be linked in the head element of an HTML file to provide global styling(s) to 
                    all linked webpages.  More stylesheets can be also be linked in after the main/global CSS file 
                    or imported within that CSS file for specific style additions.  Another way is using <strong>internal 
                    CSS</strong>internal CSS rules, in which CSS properties are <strong>embedded</strong> directly 
                    in the HTML file with the style tag.  This is useful for styling single pages uniquely.  
                    <strong>Inline CSS</strong> rules can also be added to provide a unique design to a single
                    element by using its attribute and paired value.  In JavaScript functions, CSS rules can be 
                    embedded in <strong>template literals</strong> by using back-ticks so that there is more direct 
                    control over the style of the template literal contents.  Lastly, CSS rules can be added to 
                    <strong>JavaScript HTML Document Object Model</strong> (DOM) to add style when events occur.</p>
            </article>

            <article id="forms">
                <h3>Forms</h3>
                <p>As a part of the Americans with Disabilities Act (ADA), websites need to be accessible 
                    to users with disabilities. There are 6 major goals of accessible forms that facilitate 
                    ease of use for every user, including new users and people with disabilities.  First, there 
                    should be <strong>clear instructions</strong> in the labels and above the form.  Second, users 
                    should be told <strong>why information is being gathered</strong> and which fields are 
                    required to fill out.  Third, in order for users to start typing without selecting the field, 
                    the <strong>first field should be set to autofocus</strong>.  Fourth, in case a mouse or touchpad 
                    cannot be utilized, the <strong>keyboard should be able to fill in each form control</strong>.  
                    Fifth, use <strong>tab indexing in complicated forms</strong> to clarify the sequence the fields 
                    should be filled.  Lastly, validation messages need to be <strong>screen readable</strong>.</p>

                <p>The <strong>form</strong> tag adds a form to an HTML page. Additional form tags cannot be 
                    within a form tag, but input elements and general content such as paragraphs can.  The form 
                    tag has 2 major attributes.  First, the <strong>action</strong> attribute states the absolute 
                    or relative URL to which the request from the form is sent.  Second, the <strong>method</strong> 
                    attribute defines which HTTP method (like GET or POST) to use for the HTTP request during 
                    form submission.  The <strong>fieldset</strong> and <strong>legend</strong> tags are used 
                    in complex forms to logically group form controls and support accessibility for the visually impaired.  
                    The <strong>label</strong> tag helps convey the purpose of the form entry to the user and has a 
                    for attribute which matches the id attribute for form control.  Another major tag is the 
                    <strong>input</strong> tag, which is used for data-input.  Its type attribute affects display, 
                    usage, and inclusion of other attributes.  For instance, type=“checkbox” is used to for users to 
                    select multiple options from a related set. Another important attribute for the input tag is the 
                    name attribute, which specifies which part of the form is associated with each data item when the 
                    server receives data from the form.  The required attribute makes a field created by the input tag 
                    mandatory, which marks critical fields and can prevent bots from overwhelming the server.  
                    Another essential tag is the <strong>select</strong> tag, which creates a drop-down list and has a 
                    name attribute like the input tag.  The option tag creates choices within the drop-down list and 
                    has a value attribute, which is what will be sent associated with the name attribute in the request.  
                    The <strong>textarea</strong> tag has its own label and many attributes and is used for inputting
                    multiple text lines like for users to send messages.  Lastly, the <strong>button</strong> 
                    tag performs the value defined in the action attribute of the form tag and is used instead of 
                    specifying type=“submit” for the input tag.  An external command like a keyboard click is required.</p>

                <p>Form elements should be easy to read and interact with.  In the <strong>fieldset</strong> selector, 
                    the border, margin, and padding can be changed to create room around each fieldset and around the 
                    labels and controls and to make the border unique.  The fieldset’s <strong>legend</strong>, 
                    which describes the set or prompts the user, selector can be used to manipulate font color and size to 
                    improve readability.  The <strong>label</strong> selector can move it above the form controls 
                    instead of inline and have the font size changed.  To make physically selecting the fields easier, 
                    the selectors for the <strong>input types</strong> can increase the font-size and padding.  
                    The font-family can also be inherited for consistent typography.  The autofocus attribute for the 
                    input tag automatically places the cursor in the first field, so the user can start type immediately.  
                    The background color of the field in focus can be changed with the <strong>:focus</strong> selector, 
                    so that the field in use is highlighted for the user, and they know they can start typing.  The 
                    <strong>:required</strong> selector can be changed to indicate to the user which fields need filling.  
                    For instance, changing the border of the required fields.  If the user’s input requires a certain pattern, 
                    then some attributes for the input tag can be specified for this requirement.  Then, in the CSS stylesheet, 
                    changes to the field for correct or incorrect input can be made with the <strong>:valid</strong>  and 
                    <strong>:invalid</strong> selectors.  This way, the user will know if their input was correct. 
                    The <strong>::placeholder</strong> selector can change the color of the placeholder text of the 
                    field in focus to improve contrast and readability.  The <strong>:disabled</strong>  and 
                    <strong>:enabled</strong> selectors are used to help navigate complex forms by making certain 
                    fields inaccessible without entering other fields first.</p>
            </article>

            <article id="express">
                <h3>Express</h3>
                <p><strong>Node.js</strong> is a cross-platform runtime (server) environment for JavaScript code execution 
                    outside a browser.  It is an open-source tool used for developing scalable server-side and networking 
                    applications.  The <strong>Node Package Manager (npm)</strong> is a large online software registry with 
                    various Node.js packages.  As a command-line tool, npm is used to install packages from the repository 
                    and to manage them in projects.  <strong>Express</strong> is a Node.js web application framework that 
                    provides <strong>Application Programming Interface (API)s</strong> for various common web application tasks.  
                    Developers can get, post, and delete data and define the ports and routes for the data.  Express also allows 
                    middleware to handle requests and allows the creation of static files and templates that dynamically compose 
                    responses using the static file data.  </p>
            </article>

            <article id="js">
                <h3>JavaScript</h3>
                <p>There are 7 main data types of JavaScript, of which 6 are <strong>primitive data types</strong>.  
                    The first primitive data type is a <strong>number</strong>.  In JavaScript, the only number types 
                    are double-precision floating-point or the special number value NaN.  Next is a <strong>Boolean</strong> 
                    value, which consists of either true or false.  There is also a <strong>string</strong> type.  
                    <strong>String Literals</strong> are composed only of characters and are enclosed in single or 
                    double quotes.  <strong>Template Literals</strong> are enclosed in backticks and are strings with 
                    expressions embedded within "${ }" that get converted into strings.  The <strong>symbol</strong> data 
                    type represents a unique identifier.  The last 2 primitive data types are the special values 
                    <strong>undefined</strong> and <strong>null</strong>, which denote the absence of a value.  
                    JavaScript assigns undefined automatically in some cases, such as for variables that are declared 
                    but not initialized.  The last main data type is an <strong>object</strong> and is not primitive.  
                    It is a set of name-value pairs, with the pairs also called the object’s properties.</p>
  
                <p>Four actions (referred to as <strong>CRUD</strong>) can be performed on objects. Properties of 
                    an object can be <strong>C</strong>reated, <strong>R</strong>ead, or <strong>U</strong>pdated by 
                    using the . operator after object.  For instance, s1.price can be added or updated using the = operator 
                    and a value or the price property of the s1 object can be read.  <strong>D</strong>eletion is the 
                    last action and can be done using the delete operator.  Objects can also be passed to methods, like
                    with the method <strong>Object.keys()</strong> which will return the names of all the properties 
                    of the passed object.  JavaScript <strong>arrays</strong> are objects with the numerical strings 
                    like ‘0’, ‘1’, ‘2’ as property names.  These and square brackets containing zero-based indexes 
                    can be used to access array elements.  Array values can be of any JavaScript data type, and methods 
                    can call on an array.  For instance, Array.isArray() determines if the variable value is an array or not.  
                    <strong>JavaScript Object Notation (JSON)</strong> is a widely used data interchange format that is 
                    programming language independent.  A JavaScript object can be created from a JSON string, and a JSON 
                    string can be created from a JavaScript object.</p>

                <p><strong>Conditionals</strong> in JavaScript may a bit confusing due to automatic type conversion 
                    and “loose equality” operators, but the usage is mostly similar to other programming languages. 
                    <strong>If/else if</strong> statements are used for conditional branching, and the first branch 
                    with an expression that evaluates true will execute.  Similarly, the <strong>switch</strong> 
                    statement also compares a variable to different values.  JavaScript also has a shortened way 
                    of writing a simple conditional statement called the <strong>Conditional Operator</strong> or 
                    <strong>Ternary Operator</strong>, which is similar to a small if/else decision tree.  In JavaScript, 
                    equality operators can be strict or loose.  <strong>Strict equality operators</strong> are === for 
                    strictly equal and !== for strictly not equal.  <strong>Loose equality operators</strong> are == for 
                    loosely equal and != for loosely not equal.  Strict equality operators cannot compare data of different 
                    types, but loose operators can by automatically converting them to a common type.  Standard 
                    <strong>comparison operators</strong> and <strong>Boolean operators</strong> are supported in 
                    JavaScript, but different data types are automatically converted.  Loops are also similar in Python.  
                    The <strong>while loop</strong> evaluates an expression and executes and continues if true but ends if false.  
                    The <strong>do while loop</strong> is similar, but the expression is evaluation after execution.  
                    Like in many other languages, the <strong>for loop</strong> executes a block of code a specified number 
                    of times, depending on the statement and conditions written within.  The <strong>for of loop</strong> 
                    iterates over elements that are iterable, like arrays.  The <strong>for in loop</strong> is used to 
                    iterate over properties of an object.</p>

                <p><strong>Object-oriented programming</strong> is a computer programming paradigm that organizes software 
                    design around objects or entities.  An object should have an <strong>identity</strong>, a 
                    <strong>behavior</strong>, and a <strong>state</strong>.  With traditional JavaScript, objects 
                    can be created without declaring classes, but with modern JavaScript syntax, the common way of 
                    declaring classes first and then creating objects as instances of the classes is provided.  
                    In JavaScript, objects are distinct and each has its properties as its state.  Behavior can be 
                    added to an object by adding functions (which are first-class values) as a property value.</p>

                <p><strong>Functional programming</strong> is a programming approach that creates and applies functions 
                    to construct programs.  Because functions in JavaScript are values, they can be assigned to variables,
                    receive other functions as arguments (known as <strong>higher-order functions</strong>), and return 
                    functions (known as <strong>function expressions</strong>).  Function expressions can use arrow function 
                    syntax or the function keyword.  Closures are also used in functional programming.  <strong>Closures</strong> 
                    are functions with <strong>free variables</strong> (variables that are neither passed as a parameter nor 
                    exist as locally) and, therefore, can <strong>capture</strong> variables within the defined environment.</p>
            </article>
        </>
        );
    }
    
    export default TopicsPage;
    