window.BENCHMARK_DATA = {
  "lastUpdate": 1623103131773,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "965fb99021538768213b66677f541a027c94ceca",
          "message": "Merge pull request #204 from TeoZosa/update-feature-documentation-formatting\n\n📝 Update Documentation Feature Taxonomy",
          "timestamp": "2021-06-07T21:53:32Z",
          "tree_id": "97c5b5304412fdaa9df40c49482d68be22a6baf3"
        },
        "date": 1623103130756,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15089.792620376536,
            "unit": "iter/sec",
            "range": "stddev: 0.00005330439326844483",
            "extra": "mean: 66.26996309078812 usec\nrounds: 9862"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4032199.5918095764,
            "unit": "iter/sec",
            "range": "stddev: 1.4855959975042085e-8",
            "extra": "mean: 248.0035963575034 nsec\nrounds: 11415"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12697.085114711319,
            "unit": "iter/sec",
            "range": "stddev: 0.00009632529345627577",
            "extra": "mean: 78.75823395413506 usec\nrounds: 8912"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 123934.7896600175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011651103090501027",
            "extra": "mean: 8.068759407614577 usec\nrounds: 31543"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14819.352544786998,
            "unit": "iter/sec",
            "range": "stddev: 0.00008283142343698355",
            "extra": "mean: 67.4793312985708 usec\nrounds: 13106"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4007217.221139932,
            "unit": "iter/sec",
            "range": "stddev: 1.5523870821033197e-8",
            "extra": "mean: 249.5497360923755 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}