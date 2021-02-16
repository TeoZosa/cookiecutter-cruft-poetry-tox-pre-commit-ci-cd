window.BENCHMARK_DATA = {
  "lastUpdate": 1613436498625,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f87ce322e4ce76872fa451a8a8178fe6cad717a5",
          "message": "Merge pull request #71 from TeoZosa/dependabot/pip/pygments-2.8.0\n\n⬆️ Bump pygments from 2.7.4 to 2.8.0",
          "timestamp": "2021-02-15T16:43:03-08:00",
          "tree_id": "e8cd1732de3f981db7fd3c89da4ced6132569f48",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/f87ce322e4ce76872fa451a8a8178fe6cad717a5"
        },
        "date": 1613436497648,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 12907.66349188751,
            "unit": "iter/sec",
            "range": "stddev: 0.000058953499716687554",
            "extra": "mean: 77.47335531550709 usec\nrounds: 6960"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3518085.977318361,
            "unit": "iter/sec",
            "range": "stddev: 5.978109979297113e-7",
            "extra": "mean: 284.24546939617767 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 10897.097856156455,
            "unit": "iter/sec",
            "range": "stddev: 0.00004537163114946919",
            "extra": "mean: 91.76755253556223 usec\nrounds: 9346"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 124455.15832062963,
            "unit": "iter/sec",
            "range": "stddev: 0.000033280438548840105",
            "extra": "mean: 8.035022521314332 usec\nrounds: 49020"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 12511.310603670305,
            "unit": "iter/sec",
            "range": "stddev: 0.000060602987988244256",
            "extra": "mean: 79.92767757733078 usec\nrounds: 13870"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3227413.4132253537,
            "unit": "iter/sec",
            "range": "stddev: 5.510503954088632e-7",
            "extra": "mean: 309.84564788131155 nsec\nrounds: 188680"
          }
        ]
      }
    ]
  }
}