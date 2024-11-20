<!DOCTYPE html>
<html lang="EN">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<title>Mars Bakery</title>
<script src="Baker.js"></script>
<link rel="stylesheet" href="Baker.css">
</head>

<body>
    <h1>Baker Form</h1>

    <p>
    This form has a few questions to ask for those who would like to work at Mars's Bakery. 
    Answer honestly and have fun with answering the following questions.
    </p>
    
    <!-- Baker Form -->
    <form name="appForm" onsubmit="return validateForm();" action="#" method="post">
      
      <!-- Name -->
      <div class="row">
        <label>Full Name</label>
        <input type="text" name="Fullname">
        <div class="error" id="fullnameErr"></div>
      </div>

      <!-- Age -->
      <div class="row">
        <label>Age</label>
        <input type="text" name="Age">
        <div class="error" id="ageErr"></div>
      </div>

      <!-- ID -->
      <div class="row">
        <label>ID#</label>
        <input type="text" name="ID">
        <div class="error" id="IDErr"></div>
      </div>      

      <!-- Location -->
      <div class="row">
        <label>Where are you from?</label>
        <input type="text" name="Location">
        <div class="error" id="locationErr"></div>
      </div>

      <!-- Experience -->
      <div class="row">
        <label>How many Years of experience do you have?</label>
        <input type="text" name="Experience">
        <div class="error" id="experienceErr"></div>
      </div>
      
      <!-- Work -->
      <div class="row">
        <label>Why do you want to work here?</label>
        <input type="text" name="WorkHere">
        <div class="error" id="workhereErr"></div>
      </div>

      <!-- Fav Food -->
      <div class="row">
        <label>What is your most favorite food to cook/bake?</label>
        <input type="text" name="FavFood">
        <div class="error" id="favfoodErr"></div>
      </div>
      
      <!-- Least Fav Food -->
      <div class="row">
        <label>What is your least favorite food to cook/bake?</label>
        <input type="text" name="LeastFavFood">
        <div class="error" id="LeastfavfoodErr"></div>
      </div>

      <!-- Holidays -->
      <div class="row">
        <label>Can you work holidays?</label>
        <div class="form-inline">
          <label><input type="radio" name="Holidays" value ="yes"> Yes</label>
          <label><input type="radio" name="Holidays" value ="no"> No</label>
        </div>
        <div class="error" id="HolidaysErr"></div>

        <!-- Nights -->
        <label>Nights?</label>
        <div class="form-inline">
          <label><input type="radio" name="Nights" value ="yes"> Yes</label>
          <label><input type="radio" name="Nights" value ="no"> No</label>
        </div>
        <div class="error" id="NightsErr"></div>
      </div>

      <!-- Submit -->
      <div class="row">
        <input type="submit" value="submit">
      </div>
    </form>
</body>
</html>