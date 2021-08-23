window.BENCHMARK_DATA = {
  "lastUpdate": 1629730966372,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "d42a2203ce76d5176bca07f8c8cecbfad512fb54",
          "message": "Merge pull request #299 from TeoZosa/dependabot/pip/tox-3.24.3",
          "timestamp": "2021-08-23T14:47:41Z",
          "tree_id": "1d44d168f9079aebde365924531c9edba391eecd"
        },
        "date": 1629730965101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16664.473474742455,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025588440984541618",
            "extra": "mean: 60.00789653004351 usec\nrounds: 6398"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4988378.483615402,
            "unit": "iter/sec",
            "range": "stddev: 1.7388604140486996e-8",
            "extra": "mean: 200.46594364974177 nsec\nrounds: 12563"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11069.350081176997,
            "unit": "iter/sec",
            "range": "stddev: 0.00001879742337087939",
            "extra": "mean: 90.33954050296606 usec\nrounds: 8518"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 170185.14471149014,
            "unit": "iter/sec",
            "range": "stddev: 4.833259181800693e-7",
            "extra": "mean: 5.875953519299645 usec\nrounds: 39371"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16572.32241491383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033031033718978696",
            "extra": "mean: 60.3415728323072 usec\nrounds: 9872"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5243452.626277118,
            "unit": "iter/sec",
            "range": "stddev: 7.065639703230619e-9",
            "extra": "mean: 190.71403353363618 nsec\nrounds: 48310"
          }
        ]
      }
    ]
  }
}