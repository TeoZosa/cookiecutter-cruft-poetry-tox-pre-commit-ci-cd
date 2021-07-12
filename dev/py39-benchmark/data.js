window.BENCHMARK_DATA = {
  "lastUpdate": 1626109914487,
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
          "id": "5c3161b07f86d4d74f38e2f688b896f939da067a",
          "message": "Merge pull request #244 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-2c018e2\n\n⬆️ Bump python from `8ffb28a` to `2c018e2` in /{{cookiecutter.project_slug}}",
          "timestamp": "2021-07-12T17:07:25Z",
          "tree_id": "360a4f51c26e30b5c40f47d339d3c83c95911f21"
        },
        "date": 1626109913134,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15634.289718939908,
            "unit": "iter/sec",
            "range": "stddev: 0.00003508959447361278",
            "extra": "mean: 63.96197192051303 usec\nrounds: 11325"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4273032.527621217,
            "unit": "iter/sec",
            "range": "stddev: 2.5610062290415585e-7",
            "extra": "mean: 234.02583376939464 nsec\nrounds: 65786"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13906.33629114299,
            "unit": "iter/sec",
            "range": "stddev: 0.000009704301185661046",
            "extra": "mean: 71.90966614527399 usec\nrounds: 5107"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 140218.33963068554,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014642839581515792",
            "extra": "mean: 7.131734711977426 usec\nrounds: 42550"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15768.927398216776,
            "unit": "iter/sec",
            "range": "stddev: 0.00001135729249061486",
            "extra": "mean: 63.4158541508083 usec\nrounds: 12986"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2282260.6190639436,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019421430407642417",
            "extra": "mean: 438.1620537316831 nsec\nrounds: 9756"
          }
        ]
      }
    ]
  }
}