window.BENCHMARK_DATA = {
  "lastUpdate": 1626891248359,
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
          "id": "be0ed03502a6ca9b8e191e2bc758bd928d10094b",
          "message": "Merge pull request #247 from TeoZosa/dependabot/pip/black-21.7b0\n\n⬆️ Bump black from 21.6b0 to 21.7b0",
          "timestamp": "2021-07-21T18:08:46Z",
          "tree_id": "5a15af4badbeaad3fe754fcde93b2135f3608ff9"
        },
        "date": 1626891246390,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15152.37852370891,
            "unit": "iter/sec",
            "range": "stddev: 0.0000975718390706789",
            "extra": "mean: 65.9962393650146 usec\nrounds: 12788"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4265407.029381276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015177385147822024",
            "extra": "mean: 234.44421437668834 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12861.63789416492,
            "unit": "iter/sec",
            "range": "stddev: 0.00005560969462438117",
            "extra": "mean: 77.75059508195928 usec\nrounds: 8866"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 136586.91830370037,
            "unit": "iter/sec",
            "range": "stddev: 0.000008441893074920041",
            "extra": "mean: 7.3213453559037385 usec\nrounds: 39371"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15379.585572076025,
            "unit": "iter/sec",
            "range": "stddev: 0.000133919359914067",
            "extra": "mean: 65.02125790799279 usec\nrounds: 12772"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3944787.3033744474,
            "unit": "iter/sec",
            "range": "stddev: 0.000001270720191029065",
            "extra": "mean: 253.49909211699227 nsec\nrounds: 188680"
          }
        ]
      }
    ]
  }
}