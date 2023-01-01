# Deployments

I've deployed this site at [Vercel](https://nick-preston-portfolio.vercel.app/)


## TODOS
- [x] Try [this](https://blog.devgenius.io/three-ways-to-configure-tailwindcss-with-vanilla-html-js-7175e1b8758a) for rebuilding your CSS one save.  Or [this one](https://www.codingthesmartway.com/how-to-use-tailwind-css-with-vue-and-vite/)
- [ ] Compare on Glassdoor feature:
   ```html
    <div>
        See it on Glassdoor
    </div>

    <div class="card">
        <span x-text="skill.name"></span>
        <h3 x-text="skill.companies_used_at"></h3>
        <div
        class="radial-progress"
        :value="skill.percent_mastery"
        :style="skill.percent_mastery_label"
        ></div>
    </div>
   ``` 
- [ ] Show Demand/Popularity (iframe) from LinkedIn or other sources
- [ ] Link to your LinkedIn trophies