+++
title = "Projects"
path = "projects"
+++

Projects I have learned from while building.

<section class="project-list">
  <article class="project-card">
    <div class="project-card__header">
      <p class="project-card__eyebrow">ML / sports analytics</p>
      <h2>Pitch Classifier</h2>
      <p class="project-card__summary">A small research workflow for classifying MLB pitch types from 2024 Statcast data with feed-forward neural networks.</p>
    </div>

    <ul class="project-meta">
      <li>Built for Auburn University INSY 7130 Data Mining</li>
      <li>Separate left-handed and right-handed pitcher models</li>
      <li>Uses release, movement, trajectory, and strike-zone features</li>
    </ul>

    <p>The workflow is split into three scripts: one for collecting Statcast data with <code>pybaseball</code>, one for Hyperband tuning, and one for final model training plus saved artifacts. The tuned network in the report uses a 2048 → 1024 → 512 → 256 → 128 architecture with LeakyReLU and dropout.</p>

    <p>The repo also includes training plots, epoch-by-epoch history CSVs, and the full project report. It is more of a working research artifact than a polished app, which is part of why I like it.</p>

    <p class="project-links">
      <a href="https://github.com/dpasqua17/pitch_classifier">Repository</a>
      <a href="https://github.com/dpasqua17/pitch_classifier/blob/master/Project_Report_Pasqua.pdf">Project report</a>
    </p>
  </article>
</section>
