window.BENCHMARK_DATA = {
  "lastUpdate": 1612361797274,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16ce6d08c8b413d99116b639b0673b371196341d",
          "message": "Merge pull request #62 from TeoZosa/dependabot/pip/tox-3.21.4",
          "timestamp": "2021-02-03T14:11:23Z",
          "tree_id": "de48c54fdf09e8b7be3a11df1dbcfa02fa9318b3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/16ce6d08c8b413d99116b639b0673b371196341d"
        },
        "date": 1612361796406,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14991.460919992849,
            "unit": "iter/sec",
            "range": "stddev: 0.00008772422090139132",
            "extra": "mean: 66.70463975037845 usec\nrounds: 7220"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3797542.79232822,
            "unit": "iter/sec",
            "range": "stddev: 9.6520250340803e-7",
            "extra": "mean: 263.3281715801367 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12498.1737406124,
            "unit": "iter/sec",
            "range": "stddev: 0.00016268066452306823",
            "extra": "mean: 80.01168976796453 usec\nrounds: 5209"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 174875.78880012935,
            "unit": "iter/sec",
            "range": "stddev: 0.000003171887625352768",
            "extra": "mean: 5.718344471017251 usec\nrounds: 50759"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15366.099630579956,
            "unit": "iter/sec",
            "range": "stddev: 0.00010280482179745082",
            "extra": "mean: 65.0783233248018 usec\nrounds: 13089"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4012584.367858488,
            "unit": "iter/sec",
            "range": "stddev: 3.615660651306883e-8",
            "extra": "mean: 249.21594372199613 nsec\nrounds: 5342"
          }
        ]
      }
    ]
  }
}