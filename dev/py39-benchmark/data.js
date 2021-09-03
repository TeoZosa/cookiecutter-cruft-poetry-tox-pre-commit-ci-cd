window.BENCHMARK_DATA = {
  "lastUpdate": 1630646538543,
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
          "id": "90866e2691ddc493be688211816c9ab377ae35a0",
          "message": "Merge pull request #316 from TeoZosa/improve-conditional-rendering-control\n\n💥 Improve Jupyter Notebook and Initial Project Boilerplate Conditional Rendering Granularity Control",
          "timestamp": "2021-09-03T05:12:36Z",
          "tree_id": "7c82b19c8448c84b25779716873df81b2e57d0c4"
        },
        "date": 1630646536823,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16448.778933654194,
            "unit": "iter/sec",
            "range": "stddev: 0.00001529782362746894",
            "extra": "mean: 60.79478628981999 usec\nrounds: 6579"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4972651.618748071,
            "unit": "iter/sec",
            "range": "stddev: 1.7196616452144955e-8",
            "extra": "mean: 201.09995162930275 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14552.15296530846,
            "unit": "iter/sec",
            "range": "stddev: 0.000002756975185399479",
            "extra": "mean: 68.71835407337633 usec\nrounds: 8518"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 148138.68367337386,
            "unit": "iter/sec",
            "range": "stddev: 6.107429274255557e-7",
            "extra": "mean: 6.750431252682569 usec\nrounds: 40649"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16600.793478092866,
            "unit": "iter/sec",
            "range": "stddev: 0.000002139865268770567",
            "extra": "mean: 60.23808448190407 usec\nrounds: 10594"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4852404.453383519,
            "unit": "iter/sec",
            "range": "stddev: 2.6619534563214097e-8",
            "extra": "mean: 206.08339836578125 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}